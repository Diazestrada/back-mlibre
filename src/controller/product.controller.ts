import { Request, Response } from "express";
import axios from "axios";
import { author } from "../routes";

export const productoController = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req;

    const urls = [
      `${process.env.API_MERCADO_LIBRE}/items/${id}`,
      `${process.env.API_MERCADO_LIBRE}/items/${id}/description`,
    ];
    const response = urls.map(async (url) => (await axios(url)).data);

    const [products, { plain_text }] = await Promise.all(response);
    const product = {
      author,
      item: {
        id: products["id"],
        title: products["title"],
        price: {
          currency: products["currency_id"],
          amount: products["price"],
        },
        picture: products["thumbnail"],
        condition: products["condition"],
        free_shipping: products["free_shipping"],
        sold_quantity: products["sold_quantity"],
        description: plain_text,
      },
    };

    res.json(product);
  } catch (error) {
    throw error;
  }
};
