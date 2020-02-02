import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "src/modules/app//app.controller";
import { AppService } from "src/modules/app/app.service";
import { ArticlesModule } from "src/modules/articles/articles.module";
import { UsersModule } from "src/modules/users/users.module";
import { CommentsModule } from "src/modules/comments/comments.module";
import { CategoriesModule } from "src/modules/categories/categories.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ArticlesModule,
    UsersModule,
    CommentsModule,
    CategoriesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
