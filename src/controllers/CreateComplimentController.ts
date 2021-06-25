import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";


class CreateComplimentController {
    async handle(req: Request, res: Response) {
        const { message, tag_id, user_receiver, user_sender } = req.body;

        const createComplimentService = new CreateComplimentService();

        const compliment = await createComplimentService.execute({
            message,
            tag_id,
            user_receiver,
            user_sender
        });

        return res.json(compliment);
    }
}

export { CreateComplimentController };