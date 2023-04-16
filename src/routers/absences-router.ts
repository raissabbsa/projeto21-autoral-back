import { getAbsences, postAbsences } from '@/controllers/absence-controller';
import { authenticateToken } from '@/middlewares/authentication-middleware';
import { Router } from 'express';

const absencesRouter = Router();

absencesRouter
    .all("/*", authenticateToken)
    .post('/', postAbsences)
    .get('/:subjectId', getAbsences);

export { absencesRouter };