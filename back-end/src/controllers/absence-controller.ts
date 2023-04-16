import { AuthenticatedRequest } from "@/middlewares/authentication-middleware";
import httpStatus from "http-status";
import { Response } from "express";
import absenceService from "@/services/absence-service";
import { absenceSchema } from "@/schemas/absence-schema";

export async function postAbsences(req: AuthenticatedRequest, res: Response) {
  const { amount, subjectId } = req.body;
  const { error } = absenceSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }
  try {
    await absenceService.verifyPostAbsences(amount, subjectId);
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    if (error.name === "Not Found") {
        return res.status(httpStatus.NOT_FOUND).send(error);
      }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getAbsences(req: AuthenticatedRequest, res: Response) {
    const subjectId: string = req.params.subjectId;
  
    try {
      const absences = await absenceService.verifyGetAbsences(Number(subjectId));
      return res.status(httpStatus.OK).send(absences);
    } catch (error) {
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}
