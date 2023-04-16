import absenceRepository from "@/repositories/absence-repository";

async function verifyPostAbsences(amount: number, subjectId: number) {
    const subject = await absenceRepository.verifySubject(subjectId);
    if(!subject) throw { name: "Not Found" };

    await absenceRepository.postAbsence(amount, subjectId);
}

async function verifyGetAbsences(subjectId: number) {
    const subject = await absenceRepository.verifySubject(subjectId);
    if(!subject) throw { name: "Not Found" };

    const absences = await absenceRepository.findAbsences(subjectId);
    return absences;
}

const absenceService = {
    verifyPostAbsences,
    verifyGetAbsences,
  };
  
  export default absenceService;
  