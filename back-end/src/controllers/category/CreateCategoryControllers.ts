import { Request, Response } from "express";
import { CreateCategoryServices } from "../../services/category/CreateCategoryServices";

class CreateCategoryControllers{
    async handle(req: Request, res: Response){
        const { name } = req.body;

        const createCategoryServices = new CreateCategoryServices();

        const category = await createCategoryServices.execute({
            name
        });

        return res.json(category);
    }
}

export { CreateCategoryControllers }