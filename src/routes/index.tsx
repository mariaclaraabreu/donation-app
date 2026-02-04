import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import { Discover } from "../pages/Discover";

export const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Discover,
});
