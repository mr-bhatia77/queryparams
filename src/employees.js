import React,{useState} from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import { useEffect } from 'react';

function Employees() {

  const [posts,setPosts]= useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => { setPosts(json)})
    return () => {
      }
  }, [])

  const viewHandler = (id) =>
  {
console.log(id)
  }
  return (
   <>
   {posts.map(post =>{
     return (
       <>id === {post.id} <br></br>
       username ===={post.username}<br></br>
       <Link to={`/employee/${post.id}`}><button onClick={() => viewHandler(post.id)}>View</button></Link>
       <hr></hr>
       </>
     )
   })}
    </> 
  )
}

export default Employees;
