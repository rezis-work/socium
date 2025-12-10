import { Input, Mutation, Query, Router } from 'nestjs-trpc';
import { PostsService } from './posts.service';
import {
  type CreatePostInput,
  createPostSchema,
  postSchema,
} from './schemas/trpc.schema';
import z from 'zod';

@Router()
export class PostRouter {
  constructor(private readonly postsService: PostsService) {}

  @Mutation({ input: createPostSchema, output: postSchema })
  async create(@Input() createPostDto: CreatePostInput) {
    return this.postsService.create(createPostDto, '123');
  }

  @Query({ output: z.array(postSchema) })
  async findAll() {
    return this.postsService.findAll();
  }
}
