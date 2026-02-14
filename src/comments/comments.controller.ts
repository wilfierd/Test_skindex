import { Controller, Get, Post, Body, Param, Delete, UseGuards, Request, Query } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/comment.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiResponse, ApiQuery } from '@nestjs/swagger';

@ApiTags('comments')
@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) { }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Create a new comment' })
    @ApiResponse({ status: 201, description: 'The comment has been successfully created.' })
    @ApiResponse({ status: 401, description: 'Unauthorized.' })
    @ApiResponse({ status: 404, description: 'Post not found.' })
    create(@Body() createCommentDto: CreateCommentDto, @Request() req: any) {
        return this.commentsService.create(createCommentDto, req.user.userId);
    }

    @Get()
    @ApiOperation({ summary: 'Get comments for a post' })
    @ApiQuery({ name: 'postId', required: true, type: Number })
    @ApiResponse({ status: 200, description: 'Return all comments for the post.' })
    findAll(@Query('postId') postId: string) {
        return this.commentsService.findAll(+postId);
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Delete a comment' })
    @ApiResponse({ status: 200, description: 'The comment has been successfully deleted.' })
    @ApiResponse({ status: 401, description: 'Unauthorized.' })
    @ApiResponse({ status: 403, description: 'Forbidden. You are not the author.' })
    @ApiResponse({ status: 404, description: 'Comment not found.' })
    remove(@Param('id') id: string, @Request() req: any) {
        return this.commentsService.remove(+id, req.user.userId);
    }
}
