import { rootRoute } from "./routes/__root";
import { indexRoute } from "./routes/index";
import { itemIdRoute } from "./routes/item.$id";
import { myDonationsRoute } from "./routes/my-donations";
import { myInterestsRoute } from "./routes/my-interests";

export const routeTree = rootRoute.addChildren([
    indexRoute,
    itemIdRoute,
    myDonationsRoute,
    myInterestsRoute,
]);
