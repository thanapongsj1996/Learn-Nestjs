import { IsNotEmpty, Length } from "class-validator";

export class CreateArticleInput {
  @IsNotEmpty({ message: "Please input title" })
  title: string;

  @IsNotEmpty()
  @Length(6, 10, { message: "length fail" })
  body: string;
}
