// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, query, where,getDoc,addDoc, getDocs,getFirestore } from "firebase/firestore";
import products from "./Products";



const firebaseConfig = {
    apiKey: "AIzaSyCwGvB4V4DsYOnHOOoEZjVFNmA3E3AC1P4",
    authDomain: "react-2025-f38fd.firebaseapp.com",
    projectId: "react-2025-f38fd",
    storageBucket: "react-2025-f38fd.firebasestorage.app",
    messagingSenderId: "870883035503",
    appId: "1:870883035503:web:94fac5002a0a0a6be1409a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)




export async function getProducts(){

    const productsRef = collection (db,"products");
    const productsSnapshot= await getDocs(productsRef);
    console.log(productsSnapshot);

    const documents = productsSnapshot.docs;

    const dataDocs =documents.map(item =>{
        
        return {id: item.id, ...item.data()}
            
    })
    return dataDocs
    
}
export async function getProductsById(idParam){
    const docRef =doc (db, "products", idParam);
    const docSnapshot = await getDoc(docRef)
    const docData = docSnapshot.data();
    docData.id = docSnapshot.id
    
    return docData;
}
export async function getProductsByCateg(categParam){

    const productsRef = collection (db,"products");
    const queryCategory= query(productsRef,where("category","==",categParam))
    const productsSnapshot= await getDocs(queryCategory);
    console.log(productsSnapshot);

    const documents = productsSnapshot.docs;

    const dataDocs =documents.map(item =>{
        
        return {id: item.id, ...item.data()}
    })
    return dataDocs
}
export async function createOrder(orderData){
    const orderRef=collection(db,"orders");
    const newDoc= await addDoc (orderRef,orderData)
    return newDoc;
} 
export async function exportProductsData () {
    const productsRef = collection (db,"products")
    for(let item of products){
        delete item.id;
        const docCreated = await addDoc (productsRef,item)
        console.log ("creado el doc", docCreated.id)
    }
}
export default app;