import { AuthenticatedRequest } from "@/middlewares/authentication-middleware";
import { gradeSchema, testSchema } from "@/schemas/test-schemas";
import testService from "@/services/test-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function postTest(req: AuthenticatedRequest, res: Response) {
  const { name, date, subjectId } = req.body;
  const { error } = testSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }
  try {
    await testService.verifyPostTest(name, date, subjectId);
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    if (error.name === "Conflict") {
      return res.status(httpStatus.CONFLICT).send(error);
    } else if (error.name === "Not Found") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getTests(req: AuthenticatedRequest, res: Response) {
  const subjectId: string = req.params.subjectId;
  try {
    const tests = await testService.verifyGetTest(Number(subjectId));
    return res.status(httpStatus.OK).send(tests);
  } catch (error) {
    if (error.name === "Not Found") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function putTest(req: AuthenticatedRequest, res: Response) {
    const testId: string = req.params.testId;
    const {grade} = req.body;
    const { error } = gradeSchema.validate({grade}, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }
  try {
    await testService.verifyPutTest(Number(testId), grade);
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    if (error.name === "Not Found") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
