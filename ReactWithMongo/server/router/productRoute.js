import express from "express";
import { create, deleteProduct, getALLUsers, getProductByID, update } from "../controler/productControler.js";



const route = express.Router();

route.post("/product",create)
route.get("/products",getALLUsers)
route.get("/product/:id",getProductByID)
route.put("/product/:id",update)
route.delete("/product/:id",deleteProduct)
export default route;