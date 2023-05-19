import "dotenv/config";
import fastify from "fastify";
import jwt from "@fastify/jwt";
import Cors from "@fastify/cors";
import { memoriesRoutes } from "./routes/memories";
import { authRoutes } from "./routes/auth";

const app = fastify();

app.register(Cors, {
  origin: true,
});

app.register(jwt, {
  secret: "spacetime",
});

app.register(authRoutes);
app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("runing on https://localhost:3333");
  });
