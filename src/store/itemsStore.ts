import { create } from "zustand";
import type { DonationItem, DonationStatus } from "../types/donation";

type ItemsState = {
    items: DonationItem[];
    interests: string[];
    setItems: (items: DonationItem[]) => void;
    setItem: (item: DonationItem) => void;
    addInterest: (itemId: string) => void;
    updateItemStatus: (itemId: string, status: DonationStatus) => void;
};

export const useItemsStore = create<ItemsState>((set) => ({
    items: [],
    interests: [],

    setItems: (items) => set({ items }),

    setItem: (item) =>
        set((state) => ({
            items: state.items.some((i) => i.id === item.id)
                ? state.items.map((i) => (i.id === item.id ? item : i))
                : [...state.items, item],
        })),

    addInterest: (itemId) =>
        set((state) =>
            state.interests.includes(itemId)
                ? state
                : { interests: [...state.interests, itemId] }
        ),

    updateItemStatus: (itemId, status) =>
        set((state) => ({
            items: state.items.map((item) =>
                item.id === itemId
                    ? { ...item, status, updatedAt: new Date().toISOString() }
                    : item
            ),
        })),
}));

export function getItemById(id: string): DonationItem | undefined {
    return useItemsStore.getState().items.find((item) => item.id === id);
}
