import { config } from "dotenv";

import express from "express";

import connectDB from "./db/db.js";

import authRoute from "./routes/authRoute.js";

config();

connectDB();

const app = express();

app.use(express.json());

app.use("/auth", authRoute);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server is running at ${port}`));
