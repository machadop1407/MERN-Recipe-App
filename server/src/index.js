import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const server = express();

server.use(express.json());
server.use(cors());

server.use("/auth", userRouter);
server.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://user123:Password123Tech@test.m6cb1nv.mongodb.net/recipetest?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

server.listen(3001, () => console.log("Server started"));
