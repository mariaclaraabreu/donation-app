import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import { MyInterests } from "../pages/MyInterests";

export const myInterestsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "my-interests",
    component: MyInterests,
});
