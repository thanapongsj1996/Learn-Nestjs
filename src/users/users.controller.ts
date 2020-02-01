import { Controller, Get, Post, Body } from "@nestjs/common";
import { CreateUserInput } from "src/users/create-user.input";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get("/")
  findAll() {
    return this.userService.findAll();
  }

  @Post("/")
  create(@Body() input: CreateUserInput) {
    return this.userService.create(input);
  }
}
