import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagRepositories";

class CreateTagService {
    async execute(name: string){
        const tagsRepositories = getCustomRepository(TagRepositories);

        if(!name) {
            throw new Error('Incorrect name!');
        }

        const tagAlreadyExists = await tagsRepositories.findOne({
            name
        });

        if(tagAlreadyExists) {
            throw new Error('Tag already exists!');
        }

        const tag = tagsRepositories.create({
            name
        });

        await tagsRepositories.save(tag);

        return tag;
    }
}

export { CreateTagService };
