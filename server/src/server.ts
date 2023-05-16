import fastify from "fastify";
import Cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = fastify({
  logger: true,
});

app.register(Cors, {
  origin: true,
});

app.get("/users", async () => {
  const users = await prisma.user.findMany();

  return users;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("runing on https://localhost:3333");
  });
