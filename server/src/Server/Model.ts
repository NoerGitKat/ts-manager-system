interface LoginInformation {
  username: string;
  password: string;
}

interface RequestHandler {
  handleRequest(): Promise<void>;
}

export { LoginInformation, RequestHandler };
