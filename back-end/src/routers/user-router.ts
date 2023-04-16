import { register } from '@/controllers/user-controller';
import { validateBody } from '@/middlewares/validation-middleware';
import { Router } from 'express';
import { signOutSchema } from "@/schemas/user-schema";

const usersRouter = Router();

usersRouter.post("/", validateBody(signOutSchema), register);

export { usersRouter };