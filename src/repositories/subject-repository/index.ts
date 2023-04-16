import { prisma } from "@/config/database";

async function verifyname(name: string) {
  return prisma.subjects.findFirst({
    where: {
      name,
    },
  });
}

async function verifyUser(userId: number) {
    return prisma.users.findFirst({
        where: {
            id: userId
        }
    });
}

async function createSubject(name: string, userId: number, average: number) {
    return prisma.subjects.create({
        data: {
            name,
            userId,
            average
        }
    });
}

async function getSubjects(userId:number) {
    return prisma.subjects.findMany({
        where: {
            userId
        }
    });
}

const subjectRepository = {
  verifyname,
  createSubject,
  verifyUser,
  getSubjects
};

export default subjectRepository;
