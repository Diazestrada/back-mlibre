import express, { Express } from "express";
import dotenv from "dotenv";

import products from "./routes/products";
import product from "./routes/product";

const app: Express = express();

// settings
dotenv.config();

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// router
app.use(products, product);

export default app;
