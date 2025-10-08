import { useEffect, useState } from "react";
import getMockAPIData, { getProductsByCateg } from"../data/mockAPI";
import Item from"./Item";
import { useParams } from "react-router";

export default function ItemListContainer(props){
    
    const[products, setProducts]= useState([]);
    const{categParam}= useParams([]);

    getProductsByCateg(categParam)
    .then(
        (getProductsByCateg)
    )

    useEffect( ()=>{
        
        if (categParam){
            getProductsByCateg(categParam)
            .then (productsByCateg => setProducts(productsByCateg))
        }
        else {
        getMockAPIData()
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
        })
    }
    },[categParam])

    console.log(products);

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
