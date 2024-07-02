import { Router } from 'express';

import { CreateUserControllers } from './controllers/user/CreateUserControllers';

const router = Router();

router.post('/users', new CreateUserControllers().handle);

export { router };