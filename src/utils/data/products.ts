export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "eco-bag",
    title: "エコバッグ",
    description: "再利用可能なハンドメイドエコバッグ",
  },
  {
    id: "2",
    slug: "leather-wallet",
    title: "レザーウォレット",
    description: "本革を使った手作り財布",
  },
];

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
