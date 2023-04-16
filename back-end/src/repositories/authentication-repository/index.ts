import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { prisma } from "@/config/database";

async function createSession(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  await prisma.sessions.create({
    data: {
      userId,
      token,
    },
  });
  return token;
}

async function validatePasswordOrFail(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw "Unauthorized";
}

const authenticationRepository = {
  createSession,
  validatePasswordOrFail,
};

export default authenticationRepository;
