import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
    @ApiProperty({ example: 'This is a great post!' })
    content!: string;

    @ApiProperty({ example: 1, description: 'ID of the post to comment on' })
    postId!: number;
}
