import type { DonationItem } from "../types/donation";
import { mockItems } from "./items.mock";

export async function listDonationItems(): Promise<DonationItem[]> {
    await new Promise((r) => setTimeout(r, 250));
    return mockItems.filter((i) => i.status === "AVAILABLE");
}
