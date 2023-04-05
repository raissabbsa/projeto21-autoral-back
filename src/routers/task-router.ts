import { getTasks, postTask, putTasks } from '@/controllers/task-controller';
import { authenticateToken } from '@/middlewares/authentication-middleware';
import { Router } from 'express';

const taskRouter = Router();

taskRouter
    // .all("/*", authenticateToken)
    .post('/', postTask)
    .get('/:weekdayId', getTasks)
    .put('/:taskId', putTasks);


export { taskRouter };