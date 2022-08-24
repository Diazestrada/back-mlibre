import express, { Express } from "express";
import cors from 'cors';
import dotenv from "dotenv";

import products from "./routes/products";
import product from "./routes/product";

const app: Express = express();

// settings
dotenv.config();

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
  origin:'http://localhost:3000'
}))

// router
app.use(products, product);

export default app;
