import { Request, Response } from "express";
import { CreateUserServices } from "../../services/user/CreateUserServices";

class CreateUserControllers{
    async handle(req: Request, res: Response){
        const { name, email, password } = req.body;

        const createUserServices = new CreateUserServices();

        const user = await createUserServices.execute({
            name, 
            email, 
            password 
        });

        return res.json(user);
    }
}

export { CreateUserControllers }