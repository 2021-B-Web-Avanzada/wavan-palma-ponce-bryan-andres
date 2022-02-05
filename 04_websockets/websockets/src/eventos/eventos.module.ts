import {Module} from "@nestjs/common";
import { AppService } from "src/app.service";
import {AppController} from "../app.controller";

@Module(
    {
        imports: [EventosModule],
        controllers: [AppController],
        providers:[AppService],
    }
)
export class EventosModule{

}
