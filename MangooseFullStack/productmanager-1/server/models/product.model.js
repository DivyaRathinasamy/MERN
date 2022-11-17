const mongoose = require("mongoose");

// title, price, description



const ProductSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength:[3, "Name Must Be Atleast 3 Characters Long!"]
    },
    price: {
        type: Number,
        required:[true, "Number is Required!"],
        min:[0, "Must Be More Than Zero!"]
    },
    description: {
        type: String,
        required:[true, "Description is required!"]
    }
},{timestamps:true});




const Product = mongoose.model("Product", ProductSchema)
 

module.exports = Product;

        
