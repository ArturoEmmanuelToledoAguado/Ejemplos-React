import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import {Botton} from './Botton'
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*const users=[
  {
    id: 1,
    name: 'Ryan ray',
    image:'https://robohash.org/user2'
  },
  {
    id: 2,
    name: 'Joe',
    image:'https://robohash.org/user1'
  },
  {
    id: 3,
    name: 'Marcus',
    image:'https://robohash.org/user3'
  }
]*/

function Counter(){

const [counter,setCounter]=useState(0)
const [mensaje,setMensaje]=useState('')

useEffect(()=>{
  console.log('render')
},[counter]);

  return (
    <div>
      <h1>Counter: {counter}</h1>
        <button onClick={()=>{
          setCounter(counter+1);
        }}>
        Sumar
        </button> 

       <button onClick={()=>{
        setCounter(counter-1)
       }}>
        Restar
       </button>

       <button onClick={()=>{
        setCounter(1000)
       }}>
        Reiniciar
       </button>

    <hr/>
      <input onChange={e=>setMensaje(e.target.value)}/>
      <button onClick={()=>{
        alert('El mensaje es: '+mensaje)
      }}>
        Save
      </button>
    </div>
  )
}

root.render(
  <>

  <Counter/>

  {/*{users.map((user,index)=>{
    return (
    <div key={index}>
      <h1>{user.name}</h1>
      <img src={user.image}/>
    </div>
    );
  })}*/}

  {/*<Posts/>*/}
  {/*<TaskCard ready={true}/>
  <Saludar/> 
  <Botton text="Hola Mundo"/>

  <form onSubmit={(e)=>{
  e.preventDefault()
  alert('Enviado')
  }}>
    <h1>Registro de usuario</h1>
    <button>Send</button>
</form>*/}

  {/* <Botton text='Click me'/>
  <Botton text='Pay'/>
  <Botton text='' name='Joe'/> */}
    {/* <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function () {
        alert("Hello");
      }}
    />
    <UserCard
      name="Joe Mcmillan"
      amount={1000}
      married={false}
      points={[100, 20]}
      address={{ street: "av some 123", city: "New York" }}
    /> */}
  </>
);