
import NavBar from './components/NavBar'
import './App.css'
import ItemListContainer from './components/itemListContainer'
import Item from './components/Item'
import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './contex/cartContext'
import CartContainer from './components/cartContainer'


export default function App(){
    const[page, setPage]= useState("home")
    const title = "lista de productos"

    return( 
    <CartProvider>
    <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='category/:categParam' element={ <ItemListContainer/>}/>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a mi tienda online!"/> }/>
        <Route path='/cart' element={ <CartContainer/>} />
        <Route path="/detalle/:idParam" element={ <ItemDetailContainer/>}/>
        <Route path="*"element={ <h1></h1>}/>
        </Routes>
        
    </BrowserRouter>
    </CartProvider>
    )
    }

