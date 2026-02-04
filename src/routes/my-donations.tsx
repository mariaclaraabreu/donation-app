import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import { MyDonations } from "../pages/MyDonations";

export const myDonationsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "my-donations",
    component: MyDonations,
});
