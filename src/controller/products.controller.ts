import { Request, Response } from "express";
import axios from "axios";
import { author } from "../routes";

export const productsController = async (req: Request, res: Response) => {
  try {
    const {
      query: { q },
    } = req;

    const response = await axios(
      `${process.env.API_MERCADO_LIBRE}/sites/MLA/search?q=${q}&limit=4`
    );

    let data: object[] = [];
    let categories: object[] = [];
    const items = response.data["results"];
    const itemCategories = response.data["filters"];

    if (items !== undefined && items !== null && Array.isArray(items)) {
      items.map((item) => {
        data.push({
          id: item["id"],
          title: item["title"],
          price: {
            currency: item["installments"]["currency_id"],
            amount: item["price"],
          },
          picture: item["thumbnail"],
          condition: item["condition"],
          free_shopping: item["shipping"]["free_shipping"],
          city_name: item["address"]["city_name"],
        });
      });
    }

    if (
      itemCategories !== undefined &&
      itemCategories !== null &&
      Array.isArray(itemCategories)
    ) {
      itemCategories.map((categorie) => {
        if (
          categorie["values"] !== undefined &&
          categorie["values"] !== null &&
          Array.isArray(categorie["values"])
        ) {
          categorie["values"].map((value) => {
            categories.push({
              id: value["id"],
              name: value["name"],
            });
          });
        }
      });
    }

    const products = { author, items: data, categories };
    return res.json(products);
  } catch (error) {
    throw error;
  }
};
