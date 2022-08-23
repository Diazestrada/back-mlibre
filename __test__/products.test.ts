import * as request from "supertest";
import app from "../src/app";

describe("products", () => {
  it("all producto limit 4", async () => {
    const response = await request
      .agent(app)
      .get("/api/item?q=Apple Macbook Air");
    console.log(response.body, "body");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      author: {
        name: "Juan David",
        lastName: "Diaz estrada",
      },
      items: [
        {
          id: "MLA925547590",
          title:
            "Apple Macbook Air (13 Pulgadas, 2020, Chip M1, 256 Gb De Ssd, 8 Gb De Ram) - Gris Espacial",
          price: {
            currency: "ARS",
            amount: 257999,
          },
          picture:
            "http://http2.mlstatic.com/D_801112-MLA46516512347_062021-I.jpg",
          condition: "new",
          free_shopping: true,
          city_name: "Barracas",
        },
        {
          id: "MLA934684229",
          title:
            "Apple Macbook Air (13 Pulgadas, 2020, Chip M1, 256 Gb De Ssd, 8 Gb De Ram) - Oro",
          price: {
            currency: "ARS",
            amount: 258199,
          },
          picture:
            "http://http2.mlstatic.com/D_840786-MLA46516504421_062021-I.jpg",
          condition: "new",
          free_shopping: true,
          city_name: "San Telmo",
        },
        {
          id: "MLA1151591458",
          title:
            "Apple Macbook Air (13 Pulgadas, 2020, Chip M1, 512 Gb De Ssd, 8 Gb De Ram) - Gris Espacial",
          price: {
            currency: "ARS",
            amount: 307999,
          },
          picture:
            "http://http2.mlstatic.com/D_948162-MLA46516517283_062021-I.jpg",
          condition: "new",
          free_shopping: true,
          city_name: "Villa Devoto",
        },
        {
          id: "MLA1140099295",
          title:
            "Apple Macbook Air (13 Pulgadas, 2020, Chip M1, 256 Gb De Ssd, 8 Gb De Ram) - Plata",
          price: {
            currency: "ARS",
            amount: 258000,
          },
          picture:
            "http://http2.mlstatic.com/D_648428-MLA46516517286_062021-I.jpg",
          condition: "new",
          free_shopping: true,
          city_name: "Castelar",
        },
      ],
      categories: [
        {
          id: "MLA1652",
          name: "Notebooks",
        },
        {
          id: "9344",
          name: "Apple",
        },
        {
          id: "95565",
          name: "MacBook Air",
        },
      ],
    });
  });
});
