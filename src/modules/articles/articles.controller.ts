import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";

import { ArticlesService } from "src/modules/articles/articles.service";
import { ArticlesQuery } from "src/modules/articles/articles.query";
import { CreateArticleInput } from "src/modules/articles/create-article.input";
import { UpdateArticleInput } from "src/modules/articles/update-article.input";

@Controller("articles")
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Get("/")
  findAll(@Query() query: ArticlesQuery) {
    return this.articlesService.findAll(query);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.articlesService.findOne(id);
  }

  @Post("/")
  @UsePipes(ValidationPipe)
  create(@Body() input: CreateArticleInput) {
    this.articlesService.create(input);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() input: UpdateArticleInput) {
    return this.articlesService.update(id, input);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param("id") id: string) {
    await this.articlesService.delete(id);
  }
}
