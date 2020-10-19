import { Privilege, SessionToken } from "../models/Model";

class LoginService {
  public async login(
    username: string,
    password: string
  ): Promise<SessionToken | undefined> {
    if (username === "user" && password === "123") {
      return {
        tokenId: "asdas",
        username: "user",
        isValid: true,
        expirationTime: new Date(),
        privileges: [0, 2],
      };
    } else {
      return undefined;
    }
    // return new Promise(async (resolve, reject) => {
    //   const response = await fetch();
    // });
  }
}

export default LoginService;
