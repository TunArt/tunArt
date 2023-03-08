import express from "express";
const routes=express.Router()
import Up from "../controllers/user_product"

routes.post("/bought/:userId/:productId",Up.UserBought)
routes.get("/getAll/:userId",Up.getAllitemforAuser)
routes.delete("/delete/:userId/:productId",Up.deleteItem)
export default routes