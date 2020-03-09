import {Controller, Get, HttpCode, Post, Req, Header, Query, Redirect, Param, Body, Delete} from '@nestjs/common';
import {Observable, of} from "rxjs";
import {CatDto} from "../dto/cat.dto";
import {CatsService} from "../services/cats.service";

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService){

    }
    @Post()
    @HttpCode(204)
    @Header('Cache-Control', 'none')
    create(@Body() createCatDTO: CatDto) {
        this.catsService.create(createCatDTO);
    }

    @Get()
    async findAll(): Promise<CatDto[]> {
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
