import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState([])


  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
      setCount(res.data)
    })
    
  }, [])

  return (
    <>
     <h1>Hello Axios tutorial</h1>
     {count.map((post)=>{
        const{id, title, body } = post;
        return <div className='card' key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      })}
    </>
  )
}

export default App
