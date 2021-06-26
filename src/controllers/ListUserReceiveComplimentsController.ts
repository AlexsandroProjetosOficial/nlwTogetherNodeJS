import { Request, Response } from "express";
import { ListUserReceiveComplimetsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReciveComplimentsController {
    async handle(req: Request, res: Response){
        const { user_id } = req;

        const listUserReceiveComplimentsService = new ListUserReceiveComplimetsService();

        const compliments = await listUserReceiveComplimentsService.execute(user_id);

        return res.json(compliments);
    }
}

export { ListUserReciveComplimentsController };
