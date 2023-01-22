const express= require('express');
const productRoute= express.Router();
const {ProductModel}= require('../models/Product.model')

const app= express();
app.use(express.json());


productRoute.get('', async(req,res)=>{
    try {
        const products= await ProductModel.find();
        // console.log(products);
        res.send(products);
    } catch (error) {
        res.send("All products");
        console.log(error);
    }
    
})

productRoute.post('/create', async(req,res)=>{
    const payload= req.body;
    try {
        const product= new ProductModel(payload);
        await product.save();
        console.log(product);
        res.send("product Added")
    } catch (error) {
        res.send("Error while product Adding");
        console.log(error);
    }
   
})

productRoute.patch('/update/:id', async(req,res)=>{
    const payload= req.body;
    const id= req.params.id;
    try {
            await ProductModel.findByIdAndUpdate({"_id":id}, payload)
            res.send("UPDATED")
    } catch (error) {
        res.send("Error while Product Updateing")
        console.log(error);
    }
})

productRoute.delete('/delete/:id', async(req,res)=>{
     const ID= req.params.id;
    try {
        await ProductModel.findByIdAndDelete({"_id":ID})
        res.send("DELETED")
    } catch (error) {
        res.send("Error while note Deleting")
        console.log(error);
    }
})

module.exports={productRoute};