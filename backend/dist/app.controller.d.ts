import { AppService } from './app.service';
import { CreateUserDto } from './users/dto/create-user.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    register(createUserDto: CreateUserDto): Promise<{
        message: string;
        user: {
            username: string;
            email: string;
            password: string;
            first_name: string;
            last_name: string;
            user_id: number;
        };
    }>;
}
