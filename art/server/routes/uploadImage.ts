import express from 'express';
const routes = express.Router()
import UploadImg from "../controllers/uploadImg"
routes.post('/uploadImg',UploadImg.uploadimg)
routes.post("/uploadImgs",UploadImg.uploadimages)
export default routes