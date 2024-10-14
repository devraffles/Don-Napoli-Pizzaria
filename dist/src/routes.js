"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
//|---------------------------------------- User --------------------------------------------|
const CreateUserControllers_1 = require("./controller/user/CreateUserControllers");
const AuthUserControllers_1 = require("./controller/user/AuthUserControllers");
const DetailUserControllers_1 = require("./controller/user/DetailUserControllers");
//|------------------------------------------------------------------------------------------|
//|-------------------------------------- Category ------------------------------------------|
const CreateOrderControllers_1 = require("./controller/category/CreateOrderControllers");
const ListCategoryControllers_1 = require("./controller/category/ListCategoryControllers");
//|------------------------------------------------------------------------------------------|
//|-------------------------------------- Product -------------------------------------------|
const CreateProductControllers_1 = require("./controller/product/CreateProductControllers");
const ListByCategoryControllers_1 = require("./controller/product/ListByCategoryControllers");
//|------------------------------------------------------------------------------------------|
//|--------------------------------------- Order --------------------------------------------|
const CreateOrderController_1 = require("./controller/order/CreateOrderController");
const RemoveOrderControllers_1 = require("./controller/order/RemoveOrderControllers");
const AddItemController_1 = require("./controller/order/AddItemController");
const RemoveItemControllers_1 = require("./controller/order/RemoveItemControllers");
const SendOrderController_1 = require("./controller/order/SendOrderController");
const ListOrderController_1 = require("./controller/order/ListOrderController");
const DetailOrderController_1 = require("./controller/order/DetailOrderController");
const FinishOrderController_1 = require("./controller/order/FinishOrderController");
//|------------------------------------------------------------------------------------------| 
//|------------------------------------ Middlewares -----------------------------------------|
const isAutheticated_1 = require("../middlewares/isAutheticated");
//|------------------------------------------------------------------------------------------| 
//|-------------------------------------- Multer --------------------------------------------|
const multer_2 = __importDefault(require("./config/multer"));
//|------------------------------------------------------------------------------------------| 
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
//verificar se a API estar funcionando
router.get('/ping', (req, res) => {
    return res.json({ pong: true });
});
//|---------------------------- ROTAS DO USUARIO  ------------------------------------------------------|
router.post('/users', new CreateUserControllers_1.CreateUserController().handle);
router.post('/session', new AuthUserControllers_1.AuthUserController().handle);
router.get('/me', isAutheticated_1.isAutheticated, new DetailUserControllers_1.DetailUserController().handle);
//|-----------------------------------------------------------------------------------------------------| 
//|---------------------------- ROTAS DA CATEGORIA  ----------------------------------------------------|
router.post('/category', isAutheticated_1.isAutheticated, new CreateOrderControllers_1.CreateCategoryController().handle);
router.get('/category/list', isAutheticated_1.isAutheticated, new ListCategoryControllers_1.ListCategoryController().handle);
//|-----------------------------------------------------------------------------------------------------| 
//|---------------------------- ROTAS DA PRODUCT  ------------------------------------------------------|
// router.post('/product', isAutheticated, upload.single('file'), new CreateProductController().handle);
router.post('/product', isAutheticated_1.isAutheticated, new CreateProductControllers_1.CreateProductController().handle);
router.get('/category/product', isAutheticated_1.isAutheticated, new ListByCategoryControllers_1.ListByCategoryController().handle);
//|-----------------------------------------------------------------------------------------------------| 
//|---------------------------- ROTAS DA ORDER  ------------------------------------------------------|
router.post('/order', isAutheticated_1.isAutheticated, new CreateOrderController_1.CreateOrderController().handle);
router.post('/order/add', isAutheticated_1.isAutheticated, new AddItemController_1.AddItemController().handle);
router.put('/order/finish', isAutheticated_1.isAutheticated, new FinishOrderController_1.FinishOrderController().handle);
router.put('/order/send', isAutheticated_1.isAutheticated, new SendOrderController_1.SendOrderController().handle);
router.delete('/order/remove', isAutheticated_1.isAutheticated, new RemoveItemControllers_1.RemoveItemController().handle);
router.delete('/order/delete', isAutheticated_1.isAutheticated, new RemoveOrderControllers_1.RemoveOrderController().handle);
router.get('/orders', isAutheticated_1.isAutheticated, new ListOrderController_1.ListOrderController().handle);
router.get('/order/detail', isAutheticated_1.isAutheticated, new DetailOrderController_1.DetailOrderController().handle);
