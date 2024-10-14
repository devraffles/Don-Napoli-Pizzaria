import { Request, Response } from "express";
import { CreateUserServices } from "../../services/user/CreateUserServices";

class CreateUserController{
    async handle(req: Request, res: Response){
        const { name, email, password } = req.body;

        const createUser = new CreateUserServices();

        const user = await createUser.execute({
            name, 
            email, 
            password 
        });

        return res.json(user);
    }
}

export { CreateUserController }