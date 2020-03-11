import {Global, Module} from '@nestjs/common';
import {CatsController} from "./cats.controller";
import {CatsService} from "./services/cats.service";


// Defined in order to provide a set of providers which will be available everywhere.
// Global modules should be registered only once, generally by the root or core module
// CatsService provider will be ubiquitous, and modules that wish to inject the service will not need to import the CatsModule in their imports array.
@Global()
@Module({
    controllers:[CatsController],
    providers: [CatsService],
    // Allows any other module to access cats service.
    // CatsService instance will be shared with all other modules using it.
    exports: [CatsService]
})
export class CatsModule {}
