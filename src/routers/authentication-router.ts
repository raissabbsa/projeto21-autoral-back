import { singIn } from '@/controllers/authentication-controller';
import { signInSchema } from '@/schemas/authentication-schemas';
import { Router } from 'express';

const authenticationRouter = Router();

authenticationRouter.post('/sign-in', singIn);

export { authenticationRouter };