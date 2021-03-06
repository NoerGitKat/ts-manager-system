import { LoginInformation } from "../Server/Model";

enum Privilege {
  CREATE,
  READ,
  UPDATE,
  DELETE,
}

enum HTTP_CODES {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

enum HTTP_METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  OPTIONS = "OPTIONS",
  DELETE = "DELETE",
}

interface UserCreds extends LoginInformation {
  privileges: Privilege[];
}

export { UserCreds, Privilege, HTTP_CODES, HTTP_METHODS };
