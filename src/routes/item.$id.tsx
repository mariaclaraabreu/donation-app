import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import { ItemDetail } from "../pages/ItemDetail";

export const itemIdRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "item/$id",
    component: ItemDetail,
});
