import express, { Application } from 'express';
import * as dotenv from 'dotenv'
import cors from 'cors';
dotenv.config()
// console.log(process.env);

const app: Application = express();

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + "/art"));
app.use(express.json({limit:'50mb'}));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../client/dist"));


//Require application Route modules
import artistRoute from "./server/routes/artists"
import event from './server/routes/events'
//Add Routes to the middleware handling path, specifying the respective URL path
app.use('/api/artists',artistRoute)
app.use('/api/event',event)
app.listen(port, () => {
 console.log(`App listening on port ${port}`)
    })
