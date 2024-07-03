import { Request, Response } from "express";
import { AuthUserServices } from "../../services/user/AuthUserServices";

class AuthUserControllers{
    async handle(req: Request, res: Response){
        const { email, password } = req.body;

        const authUserServices = new AuthUserServices();

        const auth = await authUserServices.execute({
            email, 
            password
        });

        return res.json(auth);
    }
}

export { AuthUserControllers }