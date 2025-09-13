function IdCard(G){
    console.log(G);
    
    return(
      <div className="IdCard">
        <p className="pic"><img src={G.photo}/></p>
       <p className="name"><h2>NAME:{G.name}</h2></p> 
        <p>Course: {G.course}</p>
        <p style={{color: "green"}}>Roll Number: {G.rollnumber}</p>
        <p>Blood Group: {G.blooddgrp}</p>
        <p>DOB: {G.DOB}</p>
      </div>
    )
  }
    export default IdCard;