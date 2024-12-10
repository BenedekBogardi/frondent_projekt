import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @Length(5, 50)
    username: string;

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    @Length(6, 50)
    email: string;

    @IsString()
    @IsNotEmpty()
    @Length(7, 25)
    password: string;

    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    first_name: string;

    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    last_name: string;
}
