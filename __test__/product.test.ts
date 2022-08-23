import * as request from "supertest";
import app from "../src/app";

describe("product", () => {
  it("product details", async () => {
    const response = await request.agent(app).get("/api/items/MLA925547590");
    console.log(response.body, "body");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      author: {
        name: "Juan David",
        lastName: "Diaz estrada",
      },
      item: {
        id: "MLA925547590",
        title:
          "Apple Macbook Air (13 Pulgadas, 2020, Chip M1, 256 Gb De Ssd, 8 Gb De Ram) - Gris Espacial",
        price: {},
        condition: "new",
        sold_quantity: 250,
        description:
          'La notebook Apple MacBook Air A2337 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.\n\nPantalla con gran impacto visual\nSu pantalla LED de 13.3" y 2560x1600px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.Su procesador Apple de 8 núcleos, te permitirá ejecutar programas variados y procesos indispensables para desenvolverte en el día a día, ya sea en tu trabajo o en los momentos de ocio en tu hogar. \n\nPotente disco sólido \nEl disco sólido de 256 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas.\n\nUn procesador exclusivo para los gráficos\nSu placa de video Apple GPU convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.\n\nUna batería de extra larga duración\nLa batería de este equipo tiene una autonomía de alrededor de 18 horas, lo que la posiciona dentro del rango de computadoras con mayor autonomía del mercado. Es ideal para quienes necesitan poder seguir trabajando o estudiando mientras están desconectados.',
      },
    });
  });
});
