import { Router, Request, Response } from 'express';
import multer from 'multer';

//|---------------------------------------- User --------------------------------------------|
import { CreateUserControllers } from './controllers/user/CreateUserControllers';
import { AuthUserControllers } from './controllers/user/AuthUserControllers';
import { DetailUserControllers } from './controllers/user/DetailUserControllers';
//|------------------------------------------------------------------------------------------|

//|-------------------------------------- Category ------------------------------------------|
import { CreateCategoryControllers } from './controllers/category/CreateCategoryControllers';
import { ListCategoryControllers } from './controllers/category/ListCategoryControllers';
//|------------------------------------------------------------------------------------------|

//|-------------------------------------- Product -------------------------------------------|
import { CreateProductControllers } from './controllers/product/CreateProductControllers';
import { ListByCategoryControllers } from './controllers/product/ListByCategoryControllers';
//|------------------------------------------------------------------------------------------|

//|------------------------------------ Middlewares -----------------------------------------|
import { isAutheticated } from '../middlewares/isAutheticated';
//|------------------------------------------------------------------------------------------| 

//|-------------------------------------- Multer --------------------------------------------|
import uploadConfig from './config/multer';
//|------------------------------------------------------------------------------------------| 

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//verificar se a API estar funcionando
router.get('/ping', (req: Request, res: Response) => {
    return res.json({ pong: true });
});


//|---------------------------- ROTAS DO USUARIO  ------------------------------------------------------|
router.post('/users', new CreateUserControllers().handle);

router.post('/session', new AuthUserControllers().handle);

router.get('/me', isAutheticated, new DetailUserControllers().handle);
//|-----------------------------------------------------------------------------------------------------| 

//|---------------------------- ROTAS DA CATEGORIA  ----------------------------------------------------|
router.post('/category', isAutheticated, new CreateCategoryControllers().handle);

router.get('/category/list', isAutheticated, new ListCategoryControllers().handle);
//|-----------------------------------------------------------------------------------------------------| 

//|---------------------------- ROTAS DA PRODUCT  ------------------------------------------------------|
router.post('/product', isAutheticated, upload.single('file'), new CreateProductControllers().handle);

router.get('/category/product', isAutheticated, new ListByCategoryControllers().handle);
//|-----------------------------------------------------------------------------------------------------| 

export { router };