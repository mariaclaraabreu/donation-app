import type { DonationItem } from "../types/donation";

export const mockItems: DonationItem[] = [
    {
        id: "1",
        category: "ANIMALS",
        title: "Cat for adoption",
        description: "Very affectionate, recently rescued.",
        neighborhood: "Downtown",
        photos: ["https://placehold.co/600x400"],
        status: "AVAILABLE",
        donorId: "u1",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        pet: {
            species: "CAT",
            size: "SMALL",
            vaccinated: true,
            neutered: false,
        },
    },
    {
        id: "2",
        category: "CLOTHES",
        title: "Coat size M",
        description: "Coat in great condition, barely used.",
        neighborhood: "Suburb",
        photos: ["https://placehold.co/600x400"],
        status: "AVAILABLE",
        donorId: "u2",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        clothing: {
            type: "COAT",
            size: "M",
            condition: "SEMI_NEW",
            brand: "Zara",
        },
    },
];
