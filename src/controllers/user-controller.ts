import userService from "@/services/user-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function register(req: Request, res: Response) {
  const { name, email, password } = req.body;
  try {
    await userService.createUser(name, email, password);
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    if (error.name === "Conflict") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
