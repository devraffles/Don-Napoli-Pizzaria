import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserServices";


class DetailUserControllers {
    async handle(req: Request, res: Response){

        const user_id = req.user_id;

        const detailUserControllers = new DetailUserService();

        const user = await detailUserControllers.execute(user_id);

        return res.json(user);
    }
}

export { DetailUserControllers }