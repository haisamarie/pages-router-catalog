import { ProductData } from "@/utils/data/products";

const ProductList = () => {
  return (
    <main>
      <h1>製品一覧</h1>
      <ul>
        {ProductData.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            {product.thumbnail && (
              <img src={product.thumbnail} alt={product.title} />
            )}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ProductList;
