import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
    @ApiProperty({ example: 'My First Post' })
    title!: string;

    @ApiProperty({ example: 'This is the content of the post.', required: false })
    content?: string;

    @ApiProperty({ example: false, required: false })
    published?: boolean;
}

export class UpdatePostDto {
    @ApiProperty({ example: 'My Updated Post', required: false })
    title?: string;

    @ApiProperty({ example: 'Updated content.', required: false })
    content?: string;

    @ApiProperty({ example: true, required: false })
    published?: boolean;
}
