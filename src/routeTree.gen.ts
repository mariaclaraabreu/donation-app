import { rootRoute } from "./routes/__root";
import { indexRoute } from "./routes/index";
import { itemIdRoute } from "./routes/item.$id";

export const routeTree = rootRoute.addChildren([indexRoute, itemIdRoute]);
