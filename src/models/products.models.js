import {db} from "../data/data.js"
import { 
    doc,
    getDoc, 
    collection, 
    getDocs,
    addDoc,
    deleteDoc, 
} from "firebase/firestore";

export function getAllProducts(){
    return(
        new Promise(async (res, rej) => {
            try {
                const querySnapshot = await getDocs(collection(db, "products"))
                console.log("Snap completa: ", querySnapshot)
                const products = []
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data)
                    products.push({...doc.data(), id: doc.id})
                })
                console.log(products)
                res(products)
            } catch (error) {
                console.log(error)
                rej(error)
            }
        })
    )
}

export function getProductById(id){
    return(
        new Promise(async (res, rej) => {
            try {
                const docRef = doc(db, "products", id)
                const docSnap = await getDoc(docRef)

                if(docSnap.exists()){
                    console.log("Snap data: ", docSnap)
                    console.log("Document ID:", docSnap.id);
                    console.log("Document data:", docSnap.data());
                    res(docSnap.data())
                }else{
                    console.log("NO existe tal documento")
                    res()
                }
            } catch (error) {
                console.log(error)
                rej(error)
            }
        })
    )
}

export function addProduct(product){
    return(
        new Promise(async (res, rej) => {
            try {
                const docRef = await addDoc(collection(db, "products"), product)
                console.log("Doc ID: ", docRef.id, "Producto: ", docRef)
                res({...product, id: docRef.id})
            } catch (error) {
                console.log(error)
                rej(error)
            }
        })
    )
}

export function deleteProduct(id){
    return(
        new Promise(async (res, rej) => {
            try {
                await deleteDoc(doc(db, "products", id))
                res()
            } catch (error) {
                console.log(error)
                rej(error)
            }
        })
    )
}

