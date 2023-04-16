import taskRepository from "@/repositories/task-repository";

async function verifyPostTasks(name: string, weekdayId: number, userId: number) {
    await taskRepository.createTask(name, weekdayId, userId);
}

async function verifyGetTasks(weekdayId: number, userId: number) {
    const tasks = await taskRepository.findTasks(weekdayId, userId);
    return tasks;
}

async function verifyPutTasks(taskId: number) {
    const task = await taskRepository.verifyTask(taskId);
    if(!task) throw { name: "Not Found" };

    await taskRepository.updateTask(taskId);
}

const taskService = {
    verifyPostTasks,
    verifyGetTasks,
    verifyPutTasks
  };
  
  export default taskService;
  