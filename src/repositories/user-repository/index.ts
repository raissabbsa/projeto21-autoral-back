import { prisma } from "@/config/database";

async function verifyEmail(email: string) {
  return prisma.users.findFirst({
    where: {
      email,
    },
  });
}

async function create(name: string, email: string, password: string) {
  return prisma.users.create({
    data: {
      name,
      email,
      password,
    },
  });
}

const userRepository = {
  verifyEmail,
  create,
};

export default userRepository;
