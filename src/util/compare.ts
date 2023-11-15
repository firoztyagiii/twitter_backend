import bcrypt from "bcrypt";

const comparePassword = async (userPassword: string, DbPassword: string) => {
  return await bcrypt.compare(userPassword, DbPassword);
};

export { comparePassword };
