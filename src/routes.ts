import { Router, Request, Response } from 'express';
import multer from 'multer';

//|---------------------------------------- User --------------------------------------------|
import { CreateUserController } from './controller/user/CreateUserControllers';
import { AuthUserController } from './controller/user/AuthUserControllers';
import { DetailUserController } from './controller/user/DetailUserControllers';
//|------------------------------------------------------------------------------------------|

//|-------------------------------------- Category ------------------------------------------|
import { CreateCategoryController } from './controller/category/CreateOrderControllers';
import { ListCategoryController } from './controller/category/ListCategoryControllers';
//|------------------------------------------------------------------------------------------|

//|-------------------------------------- Product -------------------------------------------|
import { CreateProductController } from './controller/product/CreateProductControllers';
import { ListByCategoryController } from './controller/product/ListByCategoryControllers';
//|------------------------------------------------------------------------------------------|

//|--------------------------------------- Order --------------------------------------------|
import { CreateOrderController } from './controller/order/CreateOrderController';

import { RemoveOrderController } from './controller/order/RemoveOrderControllers';

import { AddItemController } from './controller/order/AddItemController';

import { RemoveItemController } from './controller/order/RemoveItemControllers';

import { SendOrderController } from './controller/order/SendOrderController';

import { ListOrderController } from './controller/order/ListOrderController';

import { DetailOrderController } from './controller/order/DetailOrderController';

import { FinishOrderController } from './controller/order/FinishOrderController';
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
router.post('/users', new CreateUserController().handle);

router.post('/session', new AuthUserController().handle);

router.get('/me', isAutheticated, new DetailUserController().handle);
//|-----------------------------------------------------------------------------------------------------| 

//|---------------------------- ROTAS DA CATEGORIA  ----------------------------------------------------|
router.post('/category', isAutheticated, new CreateCategoryController().handle);

router.get('/category/list', isAutheticated, new ListCategoryController().handle);
//|-----------------------------------------------------------------------------------------------------| 

//|---------------------------- ROTAS DA PRODUCT  ------------------------------------------------------|
// router.post('/product', isAutheticated, upload.single('file'), new CreateProductController().handle);
router.post('/product', isAutheticated, new CreateProductController().handle);

router.get('/category/product', isAutheticated, new ListByCategoryController().handle);
//|-----------------------------------------------------------------------------------------------------| 

//|---------------------------- ROTAS DA ORDER  ------------------------------------------------------|
router.post('/order', isAutheticated, new CreateOrderController().handle);

router.post('/order/add', isAutheticated, new AddItemController().handle);

router.put('/order/finish', isAutheticated, new FinishOrderController().handle);

router.put('/order/send', isAutheticated, new SendOrderController().handle);

router.delete('/order/remove', isAutheticated, new RemoveItemController().handle);

router.delete('/order/delete', isAutheticated, new RemoveOrderController().handle);

router.get('/orders', isAutheticated, new ListOrderController().handle);

router.get('/order/detail', isAutheticated, new DetailOrderController().handle);

//|-----------------------------------------------------------------------------------------------------| 

export { router };