function Productcard({productName,price,isAvailable}){
    
    return(
        <div>
      <p>name:{productName} </p>
      <p>cost:{price}</p>
        <p>status:{isAvailable}</p>
     </div>
    )   
}
export default Productcard; 
