


function ProductCard({ productName, price, isAvailable }) {
  return (
    <div className="container">
      <p className="title">name: {productName}</p>
      <p className="price">price: {price}</p>
      {isAvailable ? (
        <p className="in">Available</p>
      ) : (
        <p className="out">Not Available</p>
      )}
    </div>
  );
}

export default ProductCard;