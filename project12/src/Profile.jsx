 function Profile(){
    const name = "Thohid"
  const age = 20
  const isStudent = true
    return(
        <div>
       <p>Nmae:{name}</p>
    <p>Age:{age}</p>
    <p>{isStudent===true?"iam a student" : "iam not a student"} </p>
    
     </div>
    )
}
export default Profile; 