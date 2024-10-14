import { Request, Response } from "express";
import { ListOrderServices } from "../../services/order/ListOrderServices";

class ListOrderController{
    async handle(req: Request, res: Response){ 
        const listOrder= new ListOrderServices();

        const order = await listOrder.execute();

        return res.json(order);
    }
}

export { ListOrderController }

