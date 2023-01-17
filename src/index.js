const express = require ('express');
const mongoose = require ("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");
const productsRoutes = require("./routes/products");

const app = express ();
const port = process.env.PORT || 9000;

//midelware
app.use(express.json());
app.use('/api', userRoutes)
app.use('/api', productsRoutes)




//routes
app.get("/", (req,res) => {
    res.send("bienvenido a la api");
});

//mongo db conexion 
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("conectado a atlas"))
.catch((error)=> console.error(error));

app.listen(port, ()=> console.log('server listen on port', port));