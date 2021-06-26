import { Request, Response } from "express";
import { ListTagService } from "../services/ListTagService";

class ListTagController {
    async handle(req: Request, res: Response) {
        const listTagsServices = new ListTagService();

        const tags = await listTagsServices.execute();

        return res.json(tags);
    }
}

export { ListTagController };
