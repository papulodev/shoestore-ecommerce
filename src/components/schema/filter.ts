export const GENDERS = ["men", "women", "unisex"] as const;
export const SIZES = ["XS", "S", "M", "L", "XL"] as const;
export const COLORS = ["black", "white", "red", "green", "blue", "grey"] as const;
export const PRICES = [
  { id: "0-50", label: "$0 - $50" },
  { id: "50-100", label: "$50 - $100" },
  { id: "100-150", label: "$100 - $150" },
  { id: "150-", label: "Over $150" },
] as const;

export type ActiveCounts = {
  gender?: number;
  size?: number;
  color?: number;
  price?: number;
};