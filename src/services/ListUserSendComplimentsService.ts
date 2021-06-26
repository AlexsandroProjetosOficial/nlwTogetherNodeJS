import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentsService {
    async execute(user_id: string) {
        const complementsRespositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complementsRespositories.find({
            where: {
                user_sender: user_id
            },
            relations:['userSender', 'userReceiver', 'tag']
        });

        return compliments;
    }
}

export { ListUserSendComplimentsService };
