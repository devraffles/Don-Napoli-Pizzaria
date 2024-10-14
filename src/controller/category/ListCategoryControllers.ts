import { Request, Response } from "express";
import { ListCategoryServices } from "../../services/category/ListCategoryServices";

class ListCategoryController{
    async handle(req: Request, res: Response){
        const listCategory = new ListCategoryServices();

        const category = await listCategory.execute();

        return res.json(category);
    }
}

export { ListCategoryController }