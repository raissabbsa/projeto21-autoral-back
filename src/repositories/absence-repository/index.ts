import { prisma } from "@/config/database";

async function verifySubject(subjectId: number){
    return prisma.subjects.findFirst({
        where: {
            id: subjectId
        }
    });
}

async function findAbsences(subjectId: number) {
    return prisma.absences.findMany({
        where: {
            subjectId
        }
    })
}

async function postAbsence(amount: number, subjectId: number){
    return prisma.absences.create({
        data: {
            amount,
            subjectId
        }
    })
}

const absenceRepository = {
    verifySubject,
    findAbsences,
    postAbsence
};

export default absenceRepository;