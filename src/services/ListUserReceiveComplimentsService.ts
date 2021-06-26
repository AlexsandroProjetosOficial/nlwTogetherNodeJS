import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserReceiveComplimetsService {
    async execute(user_id: string) {
        const complementsRespositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complementsRespositories.find({
            where: {
                user_receiver: user_id
            },
            relations:['userSender', 'userReceiver', 'tag']
        });

        return compliments;
    }
}

export { ListUserReceiveComplimetsService };
