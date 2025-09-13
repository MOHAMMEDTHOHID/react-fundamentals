function Productcard(P){
    
    return(
      <div className="container">
     <p className="title"> name:{P.productName}</p>
      <p className="price"> price:{P.price}</p> 
      <p>{P.isAvailable===true ? <p className="in">Available</p> : <p className="out">Not Available</p>}</p> 
     </div>      
    )   
  }
export default Productcard; 
