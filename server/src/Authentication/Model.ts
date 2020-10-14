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

export { User, JOB };
