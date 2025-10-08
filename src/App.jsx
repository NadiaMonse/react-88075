
import NavBar from './components/NavBar'
import './App.css'
import ItemListContainer from './components/itemListContainer'
import Item from './components/Item'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

export default function App(){
    const[page, setPage]= useState("home")
    const title = "lista de productos"

    return( 
    
    <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='category/:categParam' element={ <ItemListContainer/>}/>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a mi tienda online!"/> }/>
        <Route path="/detalle/:idParam" element={ <ItemDetailContainer/>}/>
        <Route path="*"element={ <h1></h1>}/>
        </Routes>
        
    </BrowserRouter>)
        
    }
