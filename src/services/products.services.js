import {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct 
} from "../models/products.models.js"

export const getAllProductsService = async () => {
    return(
        new Promise(async (res, rej) => {
            try {
                const products = await getAllProducts()
                res(products) 
            } catch (error) {
                rej()
            }
        })
    )
}

export const getProductByIdService = async (id) => {
    return(
        new Promise(async (res, rej) => {
            try {
                const product = await getProductById(id)
                res(product)
            } catch (error) {
                rej(error)
            }
        })
    )
}

export const addProductService = async (product) => {
    return(
        new Promise(async (res, rej) => {
            try {
                const newProduct = await addProduct(product)
                res(newProduct)
            } catch (error) {
                rej(error)
            }
        })
    )
}

export const deleteProductService = async (id) => {
    return(
        new Promise(async (res, rej) => {
            try {
                await deleteProduct(id)
                res()
            } catch (error) {
                rej(error)
            }
        })
    )
}