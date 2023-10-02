import React, { useState } from 'react'
import {data} from './Data'
import "./App.css"
const App = () => {

  let [search,setSearch] = useState('');

  return (
    <div className='main'>
    <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search'/>
    <div className='head'>
    <h4>ID</h4>
    <h4>First Name</h4>
    <h4>Last Name</h4>
    <h4>Email</h4>
    <h4>Gender</h4>
    <h4>Mobile No</h4>
    </div>

    {
      data.filter((item)=>{
       return search.toLowerCase() === '' ? data : item.first_name.toLowerCase().includes(search);
      }).map((item,index)=>{
      return  <div key={index} className='head'>
        <h4>{item.id}</h4>
        <h4>{item.first_name}</h4>
        <h4>{item.last_name}</h4>
        <h4>{item.email}</h4>
        <h4>{item.gender}</h4>
        <h4>{item.gender}</h4>
        </div>
      })
    }

    </div>
  )
}

export default App