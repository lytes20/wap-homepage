import ProductList from "./usingState/ProductList";
import ProductList2 from "./usingReducer/ProductList";

import "./global.css";

function App() {
  return (
    <div>
      Solution using useState
      <ProductList />
      <br />
      <hr />
      <br />
      Solution using useReducer
      <ProductList2 />
    </div>
  );
}

export default App;
