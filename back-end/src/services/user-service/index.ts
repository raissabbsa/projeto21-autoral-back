import userRepository from "@/repositories/user-repository";
import bcrypt from "bcrypt";

async function createUser(name: string, email: string, password: string) {
  const existEmail = await userRepository.verifyEmail(email);
  if (existEmail) throw "Conflict";

  const hashedPassword = await bcrypt.hash(password, 12);
  await userRepository.create(name, email, hashedPassword);
}

const userService = {
  createUser,
};

export default userService;
