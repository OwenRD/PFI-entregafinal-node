import express from "express"
import {
    getAllProductsController,
    getProductByIdController,
    addProductController,
    deleteProductController
} from "../controllers/products.controllers.js"
import { authentication } from "../midleware/authentication.js"

const routes = express.Router()

routes.get("/products", getAllProductsController)
routes.get("/products/:id", getProductByIdController)
routes.post("/products/create",authentication , addProductController)
routes.delete("/products/:id",authentication , deleteProductController)

export default routes

