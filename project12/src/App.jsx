import './App.css';
function App() {

  const handleChange=(e)=>{
        console.log(e.target.name)

        console.log(e.target.value)
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    alert("form submitted")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" name='email' placeholder='enter email' onChange={handleChange} />
      <input type="password" name='password' placeholder='enter password' onChange={handleChange} />
      <button type='submit'>login</button>
      </form>
    </div>
  )
}


export default App;
