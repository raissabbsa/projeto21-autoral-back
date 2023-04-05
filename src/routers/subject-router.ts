import { getSubject, postSubject } from '@/controllers/subject-controller';
import { authenticateToken } from '@/middlewares/authentication-middleware';
import { Router } from 'express';

const subjectRouter = Router();

subjectRouter
    .all("/*", authenticateToken)
    .post('/', postSubject)
    .get('/subject', getSubject);

export { subjectRouter };