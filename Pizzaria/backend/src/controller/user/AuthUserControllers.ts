import { Request, Response } from "express";
import { AuthUserServices } from "../../services/user/AuthUserServices";

class AuthUserController{
    async handle(req: Request, res: Response){
        const { email, password } = req.body;

        const authUser = new AuthUserServices();

        const auth = await authUser.execute({
            email, 
            password
        });

        return res.json(auth);
    }
}

export { AuthUserController }