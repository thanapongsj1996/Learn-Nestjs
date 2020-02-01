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
  Query
} from "@nestjs/common";

import { ArticlesService } from "./articles.service";
import { ArticlesQuery } from "./articles.query";
import { CreateArticleInput } from "./create-article.input";
import { UpdateArticleInput } from "./update-article.input";

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
  create(@Body() input: CreateArticleInput) {
    return this.articlesService.create(input);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() body: UpdateArticleInput) {
    return this.articlesService.update(id, body);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param("id") id: string) {
    return this.articlesService.delete(id);
  }
}
