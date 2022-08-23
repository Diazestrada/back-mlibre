import { router } from "./index";

// controller
import {productoController} from '../controller/index'

router.get("/api/items/:id", productoController)

export default router;
