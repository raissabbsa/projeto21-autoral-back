import { AuthenticatedRequest } from "@/middlewares/authentication-middleware";
import httpStatus from "http-status";
import { Response } from "express";
import { taskSchema } from "@/schemas/task-schema";
import taskService from "@/services/task-service";

export async function postTask(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { name, weekdayId } = req.body;
  const { error } = taskSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }
  try {
    await taskService.verifyPostTasks(name, weekdayId, userId);
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getTasks(req: AuthenticatedRequest, res: Response) {
    const weekdayId: string = req.params.weekdayId;
    const { userId } = req;

    try {
      const tasks = await taskService.verifyGetTasks(Number(weekdayId), userId);
      return res.status(httpStatus.OK).send(tasks);
    } catch (error) {
      if (error.name === "Not Found") {
        return res.status(httpStatus.NOT_FOUND).send(error);
      }
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
  }

  export async function putTasks(req: AuthenticatedRequest, res: Response) {
    const taskId: string = req.params.taskId;
    try {
      await taskService.verifyPutTasks(Number(taskId));
      return res.sendStatus(httpStatus.OK);
    } catch (error) {
      if (error.name === "Not Found") {
        return res.status(httpStatus.NOT_FOUND).send(error);
      }
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
  }
