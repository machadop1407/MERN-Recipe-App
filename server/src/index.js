import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [];

const client = await MongoClient.connect(
  'mongodb+srv://user123:Password123Tech@test.m6cb1nv.mongodb.net/recipetest?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const coll = client.db('recipetest').collection('recipes');
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();

app.listen(3001, () => console.log("Server started"));
