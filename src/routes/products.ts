import { router } from "./index";

import { productsController } from "../controller";

router.get("/api/item", productsController);

export default router;
