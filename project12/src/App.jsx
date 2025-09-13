
import Productard from "./IdCard.jsx";
import IdCard from "./IdCard.jsx";
import './IdCard.css';
import './App.css';
function App() {
  const name="Sampath";
  const course="cse"
  const rollnumber=12345
  const blooddgrp="b+ve"
  const DOB="01-01-2000"
  const photo="PHOTO.jpg"
  return (
    <div className="appli">
      <IdCard name={name} course={course} rollnumber={rollnumber} blooddgrp={blooddgrp} DOB={DOB} photo={photo} />
    </div>
  )
}


export default App;
