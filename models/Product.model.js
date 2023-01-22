const mongoose= require('mongoose');

const productSchema= mongoose.Schema({
    name: String,
    mrp: Number,
    price: Number,
    category: String,
    image: String
}, {versionKey:false})

const ProductModel= mongoose.model('product', productSchema);

module.exports={ProductModel};