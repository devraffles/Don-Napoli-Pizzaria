import { Router, Request, Response } from 'express';

import { CreateUserControllers } from './controllers/user/CreateUserControllers';
import { AuthUserControllers } from './controllers/user/AuthUserControllers';
import { DetailUserControllers } from './controllers/user/DetailUserControllers';

import { isAutheticated } from '../middlewares/isAutheticated'; 

const router = Router();

router.get('/ping', (req: Request, res: Response) => {
    return res.json({ pong: true });
});

router.post('/users', new CreateUserControllers().handle);

router.post('/session', new AuthUserControllers().handle);

router.get('/me', isAutheticated, new DetailUserControllers().handle);

export { router };