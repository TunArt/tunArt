import express, { Application } from 'express';
import * as dotenv from 'dotenv'
dotenv.config()
// console.log(process.env);

const app: Application = express();

const port = process.env.PORT || 3000;
import cors from 'cors';
app.use(express.static(__dirname + "/art"));
app.use(express.json({limit:'50mb'}));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../client/dist"));




//Require application Route modules
import artistRoute from "./server/routes/artists"

//Add Routes to the middleware handling path, specifying the respective URL path
app.use('/api/artists',artistRoute)

app.listen(port, () => {
 console.log(`App listening on port ${port}`)
    })
