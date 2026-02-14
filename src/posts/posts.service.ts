import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';

@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService) { }

    async create(createPostDto: CreatePostDto, authorId: number) {
        return this.prisma.post.create({
            data: {
                ...createPostDto,
                authorId,
            },
        });
    }

    async findAll() {
        return this.prisma.post.findMany({
            include: { author: true }, // Include author info
            orderBy: { createdAt: 'desc' },
        });
    }

    async findOne(id: number) {
        const post = await this.prisma.post.findUnique({
            where: { id },
            include: { author: true },
        });
        if (!post) {
            throw new NotFoundException(`Post with ID ${id} not found`);
        }
        return post;
    }

    async update(id: number, updatePostDto: UpdatePostDto, userId: number) {
        const post = await this.findOne(id);

        if (post.authorId !== userId) {
            throw new ForbiddenException('You are not allowed to edit this post');
        }

        return this.prisma.post.update({
            where: { id },
            data: updatePostDto,
        });
    }

    async remove(id: number, userId: number) {
        const post = await this.findOne(id);

        if (post.authorId !== userId) {
            throw new ForbiddenException('You are not allowed to delete this post');
        }

        return this.prisma.post.delete({
            where: { id },
        });
    }
}
