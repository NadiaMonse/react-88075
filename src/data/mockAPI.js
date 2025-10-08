
import products from "./Products"

function getMockAPIData(){
const promiseProducts = new Promise((resolve)=>{
    setTimeout( ()=>{
        console.log("devolver datos...")
        resolve(products)
    } ,1000)
})
    return promiseProducts;
}
export function getProductById( idRequested){
const reqItem = products.find((item)=> item.id === Number(idRequested))

const promiseProduct = new Promise(
    (resolve)=>{setTimeout(()=>{
        console.log("devolviendo item...", reqItem)
        if(reqItem){
        resolve(reqItem)}
        else{
        reject("item no encontrado")
        }
    },1000)
    })
    return promiseProduct
    }
    export function getProductsByCateg(categRequested){
        const productsFilter =products.filter(item=> item.category === categRequested);
        return new Promise((resolve)=>{
            setTimeout( ()=>{
                console.log("productos devueltos...",productsFilter)
                resolve(productsFilter)
            },1000)
        }
    )
    }
export default getMockAPIData;