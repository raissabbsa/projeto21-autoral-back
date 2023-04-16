import { prisma } from "@/config/database";

async function verifyTestname(name: string) {
  return prisma.tests.findFirst({
    where: {
      name,
    },
  });
}

async function verifysubject(subjectId: number) {
  return prisma.subjects.findFirst({
    where: {
      id: subjectId,
    },
  });
}

async function createTest(name: string, date: string, subjectId: number) {
  return prisma.tests.create({
    data: {
      name,
      date,
      subjectId,
    },
  });
}

async function getTests(subjectId: number) {
  return prisma.tests.findMany({
    where: {
      subjectId,
    },
  });
}

async function updateTest(testId:number, grade: number) {
    return prisma.tests.update({
        where: {
            id: testId
        },
        data: {
            grade
        }
    })
}

async function verifyTest(testId:number) {
    return prisma.tests.findFirst({
        where: {
            id: testId
        }
    })
}

const testRepository = {
  verifyTestname,
  verifysubject,
  createTest,
  getTests,
  updateTest,
  verifyTest
};

export default testRepository;
