import * as faker from "faker";
import { createConnection } from "typeorm";

import { User } from "./modules/users/user.entity";
import { exec } from "child_process";
import { promisify } from "util";

async function seeds() {
  const promisifiedExec = promisify(exec);
  let connection = await createConnection();

  await connection.dropDatabase();
  await promisifiedExec("npm run typeorm migration:run");
  await connection.close();

  connection = await createConnection();
  const userRepo = connection.getRepository(User);

  for (let i = 0; i <= 10; i++) {
    const user = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    };
    await userRepo.save(user);
  }
}

seeds();
