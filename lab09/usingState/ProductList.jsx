import { useState } from "react";
import Product from "./Product";

const data = [
  { id: 1, name: "Apple", price: 1, inStock: true },
  { id: 2, name: "Banana", price: 1, inStock: false },
  { id: 3, name: "Cherry", price: 2, inStock: true },
];
function ProductList() {
  const [products, setProducts] = useState(data);

  const handleUpdateInStockStatus = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, inStock: !product.inStock } : product
      )
    );
  };
  return (
    <div>
      {products.map((product) => (
        <Product
          key={product.id}
          {...product}
          handleUpdateInStockStatus={handleUpdateInStockStatus}
        />
      ))}
    </div>
  );
}

export default ProductList;
