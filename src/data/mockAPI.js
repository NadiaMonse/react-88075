
import products from "./Products"

function getMockAPIData(){
const promiseProducts = new Promise((resolve,reject)=>{
    setTimeout( ()=>{
        console.log("devolver datos...")
        resolve(products)
    } ,2000)
})
    return promiseProducts;
}
 export default getMockAPIData;