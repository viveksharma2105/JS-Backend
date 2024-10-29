import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
const [jokes, setjokes] = useState([]) //array

useEffect(()=>{
  axios.get('http://localhost:3000/api/jokes')
  .then((response)=>{
    setjokes(response.data)
  })
  .catch((error)=>{
    console.log(error) 
    
  })
})
  return (
    <>
      <h1>FullStack with Chai</h1>
      
      <p>JOKES: {jokes.length}</p> 

      {jokes.map((joke,indx) => (
  <div key={joke.id}>
    <h3>{joke.title}</h3>
    <p>{joke.content}</p>
  </div>

))}

    </>
  )
}

export default App
