import { router } from "./index";

import { productsController } from "../controller";

router.get("/api/items", productsController);

export default router;
