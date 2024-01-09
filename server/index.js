import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
const port = process.env.PORT || 9000;






import clientsRoutes from "./routes/client"
import generalRoutes from "./routes/general"
import managementRoutes from "./routes/management"
import salesRoutes from "./routes/sales";

/*CONFIGURATION*/


dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

  /*ROUTES */

// app.use("/client",clientsRoutes);
app.use("/general",generalRoutes);
app.use("/management",managementRoutes);
app.use("/sales",salesRoutes);

///////////////////////////*ROUTES *//////////////////////////////////
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(port,()=>{console.log(`Server is running on port ${port}`)});
}).catch((err)=>{
    console.log(`${err}`);
})


/////////////////////////////*ROUTES */////////////////////////

app.get("/",(req,res)=>{
    res.json({name:"Hayat"});
})













