import { Injectable } from '@nestjs/common';
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
        return this.prisma.post.findUnique({
            where: { id },
            include: { author: true },
        });
    }

    async update(id: number, updatePostDto: UpdatePostDto) {
        return this.prisma.post.update({
            where: { id },
            data: updatePostDto,
        });
    }

    async remove(id: number) {
        return this.prisma.post.delete({
            where: { id },
        });
    }
}
