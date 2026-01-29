export type DonationCategory = "ANIMALS" | "CLOTHES";
export type DonationStatus = "AVAILABLE" | "RESERVED" | "DONATED" | "STOPED";

export type Neighborhood = string;

export type DonationItemBase = {
  id: string;
  category: DonationCategory;
  title: string;
  description: string;
  neighborhood: Neighborhood;
  photos: string[];
  status: DonationStatus;
  donorId: string;
  createdAt: string;
  updatedAt: string;
};

export type PetDonationDetails = {
  species: "DOG" | "CAT" | "OTHER";
  size: "SMALL" | "MEDIUM" | "LARGE";
  ageApproxYears?: number;
  vaccinated?: boolean;
  neutered?: boolean;
  healthNotes?: string;
};

export type ClothingDonationDetails = {
  type: "SHIRT" | "PANTS" | "DRESS" | "COAT" | "OTHER";
  size?: "XS" | "S" | "M" | "L" | "XL" | "XXL";
  condition: "NEW" | "SEMI_NEW" | "USED";
  brand?: string;
};

export type PetDonationItem = DonationItemBase & {
  category: "ANIMALS";
  pet: PetDonationDetails;
};

export type ClothingDonationItem = DonationItemBase & {
  category: "CLOTHES";
  clothing: ClothingDonationDetails;
};

export type DonationItem = PetDonationItem | ClothingDonationItem;
