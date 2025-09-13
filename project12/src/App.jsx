import ProductCard from "./ProductCard.jsx";

function App() {
 const product = "item1"
 const price = 2000
 const isAvailable = true

  return (
    <div>
     <ProductCard productName={product} price={price} isAvailable={isAvailable===true?"stock" : "outof stock"} />
    </div>
  )
}


export default App;
