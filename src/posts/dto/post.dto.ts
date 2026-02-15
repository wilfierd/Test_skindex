import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
    @ApiProperty({ example: 'My First Post' })
    @IsString()
    @IsNotEmpty()
    title!: string;

    @ApiProperty({ example: 'This is the content of the post.', required: false })
    @IsOptional()
    @IsString()
    content?: string;

    @ApiProperty({ example: false, required: false })
    @IsOptional()
    @IsBoolean()
    published?: boolean;
}

export class UpdatePostDto {
    @ApiProperty({ example: 'My Updated Post', required: false })
    @IsOptional()
    @IsString()
    title?: string;

    @ApiProperty({ example: 'Updated content.', required: false })
    @IsOptional()
    @IsString()
    content?: string;

    @ApiProperty({ example: true, required: false })
    @IsOptional()
    @IsBoolean()
    published?: boolean;
}
