import {Injectable} from "@nestjs/common";
import {CatDto} from "../dto/cat.dto";
import {Cat} from "../interfaces/cat.interface";

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }
}
