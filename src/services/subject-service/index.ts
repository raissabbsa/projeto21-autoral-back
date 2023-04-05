import subjectRepository from "@/repositories/subject-repository";

async function verifyPostSubject(
  name: string,
  userId: number,
  average: number
) {
  const existName = await subjectRepository.verifyname(name);
  if (existName) throw { name: "Conflict" };

  const subject = await subjectRepository.createSubject(name, userId, average);
  console.log(subject);
  return subject;
}

async function verifyGetSubjects(userId: number) {
  const subjects = subjectRepository.getSubjects(userId);
  return subjects;
}

const subjectService = {
  verifyPostSubject,
  verifyGetSubjects,
};

export default subjectService;
