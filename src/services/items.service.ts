import type { DonationItem } from "../types/donation";
import { mockItems } from "./items.mock";

export async function listDonationItems(): Promise<DonationItem[]> {
    await new Promise((r) => setTimeout(r, 250));
    return mockItems.filter((i) => i.status === "AVAILABLE");
}

export async function getDonationItem(id: string): Promise<DonationItem | null> {
    await new Promise((r) => setTimeout(r, 150));
    return mockItems.find((i) => i.id === id) ?? null;
}
