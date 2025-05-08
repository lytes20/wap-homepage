function Product(props) {
  const { name, price, inStock, id, handleUpdateInStockStatus } = props;

  const handleChange = () => {
    handleUpdateInStockStatus(id);
  };
  return (
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
      {inStock ? (
        <p>
          Name: <span style={{ color: "green" }}>{name}</span>
        </p>
      ) : (
        <p>
          Name: <span style={{ color: "red" }}>{name}</span>
        </p>
      )}

      <p>Price: {price}</p>
      <div>
        In Stock:
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
          checked={inStock}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Product;
