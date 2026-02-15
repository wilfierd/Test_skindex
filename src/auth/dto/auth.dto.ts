import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class LoginDto {
    @ApiProperty({ example: 'user@example.com' })
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @ApiProperty({ example: 'password??@@' })
    @IsNotEmpty()
    password!: string;
}

export class RegisterDto {
    @ApiProperty({ example: 'user@example.com' })
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @ApiProperty({ example: 'password??@@' })
    @IsNotEmpty()
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    password!: string;

    @ApiProperty({ example: 'Nguyen Trung Kien', required: false })
    @IsOptional()
    @IsString()
    name?: string;
}
