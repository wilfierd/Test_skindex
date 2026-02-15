import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto } from './dto/comment.dto';

@Injectable()
export class CommentsService {
    constructor(private prisma: PrismaService) { }

    async create(createCommentDto: CreateCommentDto, authorId: number) {
        // Check if post exists
        const post = await this.prisma.post.findUnique({
            where: { id: createCommentDto.postId },
        });
        if (!post) {
            throw new NotFoundException('Post not found');
        }

        return this.prisma.comment.create({
            data: {
                content: createCommentDto.content,
                postId: createCommentDto.postId,
                authorId,
            },
            include: { author: true },
        });
    }

    async findAll(postId: number) {
        return this.prisma.comment.findMany({
            where: { postId },
            include: { author: true },
            orderBy: { createdAt: 'desc' },
        });
    }

    async remove(id: number, userId: number, role: string) {
        const comment = await this.prisma.comment.findUnique({
            where: { id },
        });

        if (!comment) {
            throw new NotFoundException('Comment not found');
        }

        if (role !== 'ADMIN' && comment.authorId !== userId) {
            throw new ForbiddenException('You are not allowed to delete this comment');
        }

        return this.prisma.comment.delete({
            where: { id },
        });
    }
}
