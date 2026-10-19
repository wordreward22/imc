import productsData from "./products.json";

export interface ProductAttributes {
  engine_model: string;
  standby_kva_kw: string;
  prime_kva_kw: string;
  frequency_hz: string;
  dry_weight_kg: string;
  dimensions_lwh: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  description: string;
  short_description: string;
  images: string[];
  categories: { id: number; name: string; slug: string }[];
  attributes: ProductAttributes;
}

export const products: Product[] = productsData as Product[];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug || p.name.toLowerCase() === slug.toLowerCase());
}

export function getFeaturedProducts(limit = 6): Product[] {
  return products.slice(0, limit);
}
