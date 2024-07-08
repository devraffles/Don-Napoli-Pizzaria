import { Router, Request, Response } from 'express';

//|---------------------------------------- User ----------------------------------------|
import { CreateUserControllers } from './controllers/user/CreateUserControllers';
import { AuthUserControllers } from './controllers/user/AuthUserControllers';
import { DetailUserControllers } from './controllers/user/DetailUserControllers';
//|--------------------------------------------------------------------------------------|

//|---------------------------------------- Category ----------------------------------------|
import { CreateCategoryControllers } from './controllers/category/CreateCategoryControllers';
import { ListCategoryControllers } from './controllers/category/ListCategoryControllers';
//|------------------------------------------------------------------------------------------|

//|---------------------------------------- Middlewares ----------------------------------------|
import { isAutheticated } from '../middlewares/isAutheticated';
//|---------------------------------------------------------------------------------------------| 

const router = Router();

//verificar se a API estar funcionando
router.get('/ping', (req: Request, res: Response) => {
    return res.json({ pong: true });
});


//|--------------------------- ROTAS DO USUARIO  ---------------------------|
router.post('/users', new CreateUserControllers().handle);

router.post('/session', new AuthUserControllers().handle);

router.get('/me', isAutheticated, new DetailUserControllers().handle);

//|--------------------------- ROTAS DA CATEGORIA  ---------------------------|
router.post('/category', isAutheticated, new CreateCategoryControllers().handle);

router.get('/category/list', isAutheticated, new ListCategoryControllers().handle);

export { router };