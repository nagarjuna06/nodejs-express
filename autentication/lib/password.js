import bcrypt from "bcrypt";

export const passwordHashing = async (password) => {
  const hashPassword = await bcrypt.hash(password, 10);
  return hashPassword;
};

export const comparePassword = async (password, hashPassword) => {
  const isCorrectPassword = await bcrypt.compare(password, hashPassword);
  return isCorrectPassword;
};
