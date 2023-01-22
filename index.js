const express= require('express');
const cors= require('cors');

require('dotenv').config()
const { connection } = require('./configs/db');

// const { UserModel } = require('./models/User.model');
const app= express();
// app.use(cors({
//     origin:'*'
// }));

app.use(cors());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.use(express.json());

const {userRoute}= require('./routes/users.route')
const {productRoute}= require('./routes/product.route')
// const {authenticate}= require('./middleware/verify.middleware')
app.use('/users', userRoute);
// app.use(authenticate);
app.use('/products', productRoute);


app.listen(process.env.port, async()=>{
    try {
        await connection;
        console.log("Connected To DB");
    } catch (error) {
        console.log("Error while connecting DB");
    }
    console.log("Running on PORT");
})