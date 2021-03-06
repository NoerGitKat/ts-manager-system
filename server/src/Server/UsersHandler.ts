import { IncomingMessage, ServerResponse } from "http";
import { TokenValidator, User } from "../Authentication/Model";
import UsersDbAccess from "../Authentication/UsersDbAccess";
import { HTTP_CODES, HTTP_METHODS, Privilege } from "../Shared/Model";
import BaseRequestHandler from "./BaseRequestHandler";
import Utils from "./Utils";

class UsersHandler extends BaseRequestHandler {
  private userDbAccess: UsersDbAccess;
  private tokenValidator: TokenValidator;

  public constructor(
    req: IncomingMessage,
    res: ServerResponse,
    tokenValidator: TokenValidator
  ) {
    super(req, res);
    this.userDbAccess = new UsersDbAccess();
    this.tokenValidator = tokenValidator;
  }

  public async handleRequest(): Promise<void> {
    switch (this.req.method) {
      case HTTP_METHODS.GET:
        await this.fetchUsers();
        break;
      case HTTP_METHODS.POST:
        await this.createUser();
        break;
      case HTTP_METHODS.DELETE:
        await this.deleteUser();
        break;
      default:
        this.handleNotFound("Method not found!");
        break;
    }
  }

  private async fetchUsers(): Promise<User | undefined> {
    const isAuthorized = await this.authorizeRequest(Privilege.READ);

    if (isAuthorized) {
      const parsedUrl = Utils.getQueryParams(this.req.url);

      if (parsedUrl) {
        // Get user from db
        const userId = parsedUrl.query.id;
        // Get users by name
        const userName = parsedUrl.query.name;

        try {
          if (userId) {
            const user = await this.userDbAccess.getOneUserInDB(
              userId as string
            );

            if (user) {
              this.respondWithJSON(HTTP_CODES.OK, user);
            } else {
              this.handleNotFound("No user found!");
            }
          } else if (userName) {
            const users = await this.fetchUsersByName(userName as string);
            if (users && users.length > 0) {
              this.respondWithJSON(HTTP_CODES.OK, users);
            } else {
              this.handleNotFound("No user found!");
            }
          } else {
            this.handleBadRequest("");
          }
        } catch (error) {
          this.handleServerError(error.message);
        }
      }
    } else {
      this.handleUnAuthorizedRequest("You are not authorized to do this.");
    }

    return undefined;
  }

  private async fetchUsersByName(name: string): Promise<User[] | undefined> {
    try {
      const users = await this.userDbAccess.getUsersByName(name);
      if (users.length > 0) {
        return users;
      } else {
        return [];
      }
    } catch (error) {
      this.handleBadRequest(error.message);
    }
  }

  private async createUser(): Promise<void> {
    try {
      const isAuthorized = await this.authorizeRequest(Privilege.CREATE);

      // 1. Check if user is authorized to create new user
      if (isAuthorized) {
        // 2. Get data from fields in request
        const newUser: User = await this.getRequestBody();

        // 3. Create new user in DB
        await this.userDbAccess.storeUserInDB(newUser);
        // // 4. Respond with new user
        this.respondWithJSON(HTTP_CODES.CREATED, newUser);
      } else {
        this.handleUnAuthorizedRequest("You are not authorized to do this.");
      }
    } catch (error) {
      this.handleServerError(error.message);
    }
  }

  private async deleteUser(): Promise<void> {
    try {
      const isAuthorized = await this.authorizeRequest(Privilege.DELETE);

      if (isAuthorized) {
        const parsedUrl = Utils.getQueryParams(this.req.url);

        if (parsedUrl) {
          // Get user from db
          const userId = parsedUrl.query.id;
          const isDeleted = await this.userDbAccess.deleteUserFromDB(
            userId as string
          );
          if (isDeleted) {
            this.respondWithJSON(HTTP_CODES.OK, {
              msg: "User successfully deleted!",
            });
          } else {
            this.handleNotFound("User not found.");
          }
        }
      } else {
        this.handleUnAuthorizedRequest("You are not authorized to do this.");
      }
    } catch (error) {
      this.handleServerError(error.message);
    }
  }

  public async authorizeRequest(operation: Privilege): Promise<Boolean> {
    try {
      // 1. Get session token id from headers
      const tokenId = this.req.headers.authorization;

      if (tokenId) {
        //  2. Get privileges from token
        const tokenPrivileges = await this.tokenValidator.validateToken(
          tokenId
        );

        // 3. Check if the current operation is within the privilege of the user
        if (tokenPrivileges.privileges.includes(operation)) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } catch (error) {
      this.handleServerError(error.message);
      return false;
    }
  }
}

export default UsersHandler;
