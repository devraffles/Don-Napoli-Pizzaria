import { Request, Response } from "express";
import { CreateCategoryServices } from "../../services/category/CreateCategoryServices";

class CreateCategoryController{
    async handle(req: Request, res: Response){
        const { name } = req.body;

        const createCategory = new CreateCategoryServices();

        const category = await createCategory.execute({
            name
        });

        return res.json(category);
    }
}

export { CreateCategoryController }