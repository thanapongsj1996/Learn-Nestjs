import { Controller, Post, Body } from "@nestjs/common";
import { CreateCommentInput } from "src/modules/comments/create-comment.input";
import { CommentsService } from "./comments.service";

@Controller("comments")
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Post()
  create(@Body() input: CreateCommentInput) {
    this.commentsService.create(input);
  }
}
