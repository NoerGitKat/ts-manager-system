import { Privilege } from "../Shared/Model";

enum JOB {
  JUNIOR,
  MEDIOR,
  SENIOR,
  EXPERT,
}

interface User {
  name: string;
  age: number;
  email: string;
  id: string;
  job: JOB;
}

interface TokenPrivileges {
  privileges: Privilege[];
  state: TokenState;
}

interface TokenValidator {
  validateToken(tokenId: string): Promise<TokenPrivileges>;
}
enum TokenState {
  VALID,
  INVALID,
  EXPIRED,
}

export { User, JOB, TokenValidator, TokenPrivileges, TokenState };
