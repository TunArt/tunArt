import express, { Application } from 'express';
import * as dotenv from 'dotenv'
import cors from 'cors';
dotenv.config()

const app: Application = express();

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + "/art"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../client/dist"));


//Require application Route modules
import artistRoute from "./server/routes/artists"
import userRoute from "./server/routes/user"
import artworkRoute from "./server/routes/artwork"
import productRoute from "./server/routes/product"
import paymentRoute from "./server/routes/payment";
import bidRoute from "./server/routes/bid";
import categoryRoute from "./server/routes/category";
import eventRoute from './server/routes/events'
import userProd from "./server/routes/user_product"
import userFavorite from "./server/routes/user_Favorite"
// import roomRoute from "./server/routes/room"
import messageRoute from "./server/routes/message"
//Add Routes to the middleware handling path, specifying the respective URL path
app.use('/api/artists',artistRoute)
app.use('/api/event',eventRoute)
app.use('/api/users',userRoute)
app.use('/api/artworks',artworkRoute)
app.use('/api/products',productRoute)
app.use('/api/payments',paymentRoute)
app.use('/api/bids',bidRoute)
app.use('/api/categories',categoryRoute)
app.use('/api/route',userProd)
// app.use('/api/rooms',roomRoute)
app.use('/api/messages',messageRoute)

app.use('/api/favorite',userFavorite)


app.listen(port, () => {
 console.log(`App listening on port ${port}`)
    })
