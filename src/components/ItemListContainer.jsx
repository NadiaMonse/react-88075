import { useEffect, useState } from "react";
import { getProductsById } from"../data/firebase";
import { getProducts,getProductsByCateg } from "../data/firebase";
import Item from"./Item";
import { useParams } from "react-router";


export default function ItemListContainer(props){
    
    const[products, setProducts]= useState([]);
    const[isLoading, setIsLoading] = useState(true)
    const{categParam}= useParams();


    useEffect( ()=>{
        setIsLoading(true)
        
        if (categParam){
            getProductsByCateg(categParam)
            .then (productsByCateg => setProducts(productsByCateg))
            .catch (error =>alert(error))
            .finally(()=> setIsLoading(false))
        }
        else {
        getProducts()
        .then((productsList)=>{
            setProducts(productsList);
        })
        .catch(
            (error)=>{
                console.log("eror",error);
                alert("no se encontro producto")
            })
        .finally(()=>{
            console.log("se ajusta")
            setIsLoading(false)
        })
    }
    },[categParam])

    return(
        <div>
        <h2>{props.greeting}</h2>
        {products.length === 0 ? <p>cargando...</p>:""}
        <div>
        <h3>Nuestros Productos</h3>
        <div style={{display:"flex", gap:"30px", flexDirection:"row", flexWrap:"wrap"}}>
        {
            products.map(
                item=> <Item key={item.id}{...item} />
            ) }
            </div>
        </div>
        </div>
    )
}
