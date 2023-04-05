import { AuthenticatedRequest } from "@/middlewares/authentication-middleware";
import { subjectSchema } from "@/schemas/subject-schemas";
import subjectService from "@/services/subject-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postSubject(req: AuthenticatedRequest, res: Response) {
  const { name, average } = req.body;
  const { userId } = req;
  const { error } = subjectSchema.validate(
    { name, userId, average },
    { abortEarly: false }
  );

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }
  try {
    await subjectService.verifyPostSubject(name, userId, average);
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    if (error.name === "Conflict") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getSubject(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const subjects = await subjectService.verifyGetSubjects(userId);
    return res.status(httpStatus.OK).send(subjects);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
