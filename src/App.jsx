
import NavBar from './components/NavBar'
import './App.css'
import ItemListContainer from './components/itemListConteiner'


function App() { 
  return(
    <div style={{marginTop:"70px"}}>
    <NavBar/>
    <ItemListContainer greeting="Bienvenidos a mi tienda online!"/>
  </div>
  );
};

export default App;





