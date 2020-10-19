import { SessionToken } from "../models/Model";

const baseUrl = "http://localhost:8080";

class LoginService {
  public async login(
    username: string,
    password: string
  ): Promise<SessionToken | undefined> {
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    };

    try {
      const response = await fetch(`${baseUrl}/login`, request);

      if (response.status === 200) {
        const parsedResponse = await response.json();
        return parsedResponse;
      } else {
        return undefined;
      }
    } catch (error) {
      console.error("Error happened!", error.message);
    }
  }
}

export default LoginService;
