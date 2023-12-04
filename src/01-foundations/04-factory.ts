type BuildMakePerson = {
  getUUID: () => string;
  getAge: (birthdate: string) => number;
};
type Person = {
  name: string;
  birthdate: string;
};

export const buildMakePerson = ({ getUUID, getAge }: BuildMakePerson) => {
  return ({ name, birthdate }: Person) => {
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };
};
