import { PrismaService } from './prisma.service';
import { CreateUserDto } from './users/dto/create-user.dto';
export declare class AppService {
    db: PrismaService;
    constructor(db: PrismaService);
    getHello(): string;
    register(createUserDto: CreateUserDto): Promise<{
        username: string;
        email: string;
        password: string;
        first_name: string;
        last_name: string;
        user_id: number;
    }>;
}
