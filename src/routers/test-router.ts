import { getTests, postTest, putTest } from '@/controllers/test-controller';
import { authenticateToken } from '@/middlewares/authentication-middleware';
import { Router } from 'express';

const testRouter = Router();

testRouter
    .all("/*", authenticateToken)
    .post('/', postTest)
    .get('/:subjectId', getTests)
    .put('/:testId', putTest);


export { testRouter };