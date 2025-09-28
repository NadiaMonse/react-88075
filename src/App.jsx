
import NavBar from './components/NavBar'
import './App.css'
import ItemListContainer from './components/itemListConteiner'
import Item from './components/Item'

export default function App(){
    return( 
    <div>
        <NavBar/>
        <ItemListContainer greeting="Bienvenidos a mi tienda online!"/>
        
        <Item title="remera negra" price="$20000"img="https://i.pinimg.com/474x/9c/44/09/9c4409dda2280af9303c612600116099.jpg" />
        <Item title="buzo" price="$15000" img="https://i.pinimg.com/236x/9d/2a/f3/9d2af318d8072737e3042e4a66577804.jpg "/>
        <Item title="campera" price="$25000"img="https://i.pinimg.com/474x/a0/e6/40/a0e6403105dd158fd185aad1241d15cd.jpg"/>
        </div>
    )
}
