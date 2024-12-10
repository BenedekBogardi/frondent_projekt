import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import * as bcrypt from 'bcryptjs'
import { CreateUserDto } from './users/dto/create-user.dto';


@Injectable()
export class AppService {
  db: PrismaService;

  constructor(db: PrismaService) {
    this.db = db;
  }
  getHello(): string {
    return 'Hello World!';
  }

  async register(createUserDto: CreateUserDto) {
    try {
        const existingUser = await this.db.user.findFirst({ where: { username: createUserDto.username } });
        if (existingUser) {
            throw new Error('User with username already exists!');
        }

        const existingEmail = await this.db.user.findFirst({ where: { email: createUserDto.email } });
        if (existingEmail) {
            throw new Error('E-mail address is already used by one of the users!');
        }

        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        console.log(hashedPassword)
        const newUser = await this.db.user.create({
            data: {
                ...createUserDto,
                password: hashedPassword,
            },
        });

        return newUser;
    } catch (error) {
        throw new Error(error.message || 'Failed to register user');
    }
}

}
