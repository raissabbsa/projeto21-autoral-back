import testRepository from "@/repositories/test-repository";

async function verifyPostTest(name: string, date: string, subjectId: number) {
    const existSubject = await testRepository.verifysubject(subjectId);
    if (!existSubject) throw { name: "Not Found" };

    await testRepository.createTest(name, date, subjectId);
}

async function verifyGetTest(subjectId: number) {
    const existSubject = await testRepository.verifysubject(subjectId);
    if (!existSubject) throw { name: "Not Found" };

    const tests = await testRepository.getTests(subjectId);

    return tests;
}

async function verifyPutTest(testId: number, grade: number) {
    const existTest = await testRepository.verifyTest(testId);
    if(!existTest) throw { name: "Not Found" };

    await testRepository.updateTest(testId, grade);
}

const testService = {
  verifyPostTest,
  verifyGetTest,
  verifyPutTest
};

export default testService;
