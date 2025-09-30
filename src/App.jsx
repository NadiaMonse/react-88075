
import NavBar from './components/NavBar'
import './App.css'
import ItemListContainer from './components/itemListConteiner'
import Item from './components/Item'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'

export default function App(){
    const[page, setPage]= useState("home")
    const title = "lista de productos"

    return( 
    
    <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos a mi tienda online!"/> }/>
        <Route path='/detalle' element={ <h1>detalle</h1>}/>
        <Route path='*'element={ <h1>pagina no encontrada</h1>}/>
        </Routes>
        
    </BrowserRouter>)
        
    }
