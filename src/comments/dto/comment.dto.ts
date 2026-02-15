import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
    @ApiProperty({ example: 'This is a great post!' })
    @IsString()
    @IsNotEmpty()
    content!: string;

    @ApiProperty({ example: 1, description: 'ID of the post to comment on' })
    @IsInt()
    @IsNotEmpty()
    postId!: number;
}
