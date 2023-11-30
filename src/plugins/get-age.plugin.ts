// import getAGePlugin from 'get-age'

export const getAge = (birthdate: string) => {
  // return getAGePlugin(birthdate);
  return new Date().getFullYear() - new Date(birthdate).getFullYear();
};
