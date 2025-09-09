import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Addtodo from './Addtodo'

function App() {


  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/addtodo' element={<Addtodo/>}/>
       <Route path='/' element={<TodoList/>}/>
     </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
