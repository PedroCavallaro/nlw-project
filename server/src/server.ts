import fastify from "fastify";
import Cors from "@fastify/cors";
import { memoriesRoutes } from "./routes/memorys";

const app = fastify();

app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("runing on https://localhost:3333");
  });
