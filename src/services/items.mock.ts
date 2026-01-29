import type { DonationItem } from "../types/donation";

export const mockItems: DonationItem[] = [
    {
        id: "1",
        category: "ANIMALS",
        title: "Gatinha para adoção",
        description: "Muito carinhosa, resgatada recentemente.",
        neighborhood: "Centro",
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
        title: "Casaco tamanho M",
        description: "Casaco em ótimo estado, pouco usado.",
        neighborhood: "Aldeota",
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
