import React,{useState,useEffect} from 'react'

export default function Employee(props) {
    const [user,setUser]= useState({});
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/'+props.match.params.id)
  .then(response => response.json())
  .then(json => { setUser(json)})
    return () => {
      }
  }, [props.match.params.id])
    return (
        <div>
            {user.id} = {user.username}
        </div>
    )
}
