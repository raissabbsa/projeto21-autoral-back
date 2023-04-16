import { getTasks, postTask, putTasks } from '@/controllers/task-controller';
import { authenticateToken } from '@/middlewares/authentication-middleware';
import { Router } from 'express';

const taskRouter = Router();

taskRouter
    .put('/finished/:taskId', putTasks)
    .all("/*", authenticateToken)
    .post('/', postTask)
    .get('/:weekdayId', getTasks);


export { taskRouter };