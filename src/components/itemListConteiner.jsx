import { useEffect, useState } from "react";
import getMockAPIData from"../data/mockAPI";
import Item from"./Item";


export default function ItemListContainer(props){
    
    const[products, setProducts]= useState([]);

    useEffect(()=>{
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
        }
        )
    },[]);
    console.log(products);
    return(
        <div>
        <h2>{props.greeting}</h2>
        <h3>nuestros productos</h3>
        <div style={{display:"flex", gap:"30px", flexDirection:"row", flexWrap:"wrap"}}>
        {
            products.map(
                item=> <Item {...item} />
            ) }
        </div>
        </div>
    )
}
