import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Comment } from "./comment.entity";
import { Repository } from "typeorm";

import { CreateCommentInput } from "src/comments/create-comment.input";

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>
  ) {}
  create(input: CreateCommentInput) {
    const comment = this.commentRepository.create(input);

    this.commentRepository.save(comment);
  }
}
