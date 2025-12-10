import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostRouter } from './post.router';
import { UsersModule } from 'src/auth/users/users.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [UsersModule, DatabaseModule],
  providers: [PostsService, PostRouter],
})
export class PostsModule {}
