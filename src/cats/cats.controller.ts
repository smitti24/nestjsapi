import {Controller, Get, HttpCode, Post, Req, Header, Query, Redirect, Param, Body, Delete} from '@nestjs/common';
import {Observable, of} from "rxjs";
import {CatDto} from "../dto/cat.dto";

@Controller('cats')
export class CatsController {
    @Post()
    @HttpCode(204)
    @Header('Cache-Control', 'none')
    create(@Body() createCatDTO: CatDto): string {
        return 'This action adds a new cats';
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }

    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }

    @Get()
    findAll(): Observable<any[]> {
        return of([]);
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
