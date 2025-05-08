function productsReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "toggle_stock":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === payload
            ? { ...product, inStock: !product.inStock }
            : product
        ),
      };

    default:
      return state;
  }
}

export default productsReducer;
