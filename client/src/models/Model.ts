enum Privilege {
  CREATE,
  READ,
  UPDATE,
  DELETE,
}

interface SessionToken {
  tokenId: string;
  username: string;
  isValid: Boolean;
  expirationTime: Date;
  privileges: Privilege[];
}

export { SessionToken, Privilege };
