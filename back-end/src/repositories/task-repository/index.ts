import { prisma } from "@/config/database";

async function createTask(name: string, weekdayId: number, userId: number) {
    return prisma.tasks.create({
        data: {
            name,
            userId,
            weekdayId,
            finished: false
        }
    });
}

async function updateTask(taskId: number) {
    return prisma.tasks.update({
        where: {
            id: taskId
        },
        data: {
            finished: true
        }
    }); 
}

async function findTasks(weekdayId: number, userId: number) {
    return prisma.tasks.findMany({
        where: {
            weekdayId,
            userId
        }
    }) ;
}

async function verifyTask(taskid: number) {
    return prisma.tasks.findFirst({
        where: {
            id: taskid
        }
    }) ;
}

const taskRepository = {
    createTask,
    updateTask,
    findTasks,
    verifyTask
};

export default taskRepository;