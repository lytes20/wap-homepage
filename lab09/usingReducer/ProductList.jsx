import { useReducer } from "react";
import Product from "./Product";
import productsReducer from "./productsReducer";

const data = [
  { id: 1, name: "Apple", price: 1, inStock: true },
  { id: 2, name: "Banana", price: 1, inStock: false },
  { id: 3, name: "Cherry", price: 2, inStock: true },
];
function ProductList() {
  const [state, dispatch] = useReducer(productsReducer, { products: data });

  const handleUpdateInStockStatus = (id) =>
    console.log("dispatch") || dispatch({ type: "toggle_stock", payload: id });

  return (
    <div>
      {state.products.map((product) => (
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
