import { LoginInformation } from "../Server/Model";

enum Privilege {
  CREATE,
  READ,
  UPDATE,
  DELETE,
}

interface UserCreds extends LoginInformation {
  privileges: Privilege[];
}

export { UserCreds, Privilege };
