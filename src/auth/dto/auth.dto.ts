import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty({ example: 'user@example.com' })
    email!: string;

    @ApiProperty({ example: 'password??@@' })
    password!: string;
}

export class RegisterDto {
    @ApiProperty({ example: 'user@example.com' })
    email!: string;

    @ApiProperty({ example: 'password??@@' })
    password!: string;

    @ApiProperty({ example: 'Nguyen Trung Kien', required: false })
    name?: string;
}
