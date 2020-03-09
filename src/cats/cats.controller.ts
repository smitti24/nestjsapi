import {Controller, Get, HttpCode, Post, Header, Param, Body, Delete} from '@nestjs/common';
import {CatsService} from "./services/cats.service";
import {Cat} from "./interfaces/cat.interface";

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService){

    }
    @Post()
    @HttpCode(204)
    @Header('Cache-Control', 'none')
    create(@Body() createCatDTO: Cat) {
        this.catsService.create(createCatDTO);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }


    // @Get()
    // findAll(@Req() request: Request): string {
    //     return 'This action returns all cats';
    // }
}
