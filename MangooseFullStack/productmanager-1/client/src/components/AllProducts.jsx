import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const AllProducts = (props) => {

    let [products, setProducts] = useState([])
    let[deletedProduct, setDeletedProduct] =useState(false)

    useEffect(() => {

        axios.get("http://localhost:8000/api/products")

            .then(response => {
                setProducts(response.data.results);
            })
            .catch(err =>console.log(err))

    },[deletedProduct, props.submittedForm])


    
    const deleteProduct =(id)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(response=>{
            console.log(response)
                setDeletedProduct(!deletedProduct)

        })
        .catch(err=>console.log(err))
    }


    return (
        <div>
            <h3>All Products Below!</h3>
            {
                products.map((product)=>{
                    return (
                        <div key ={product._id} className='card mb-3'>
                            <h2>Name: <Link to={`/products/${product._id}`}> {product.name}</Link></h2>
                            <p>Price: {product.price}</p>
                            <p>Description: {product.description}</p>
                            <Link to={`/products/edit/${product._id}`} className='btn btn-primary'>Edit {product.name}</Link>
                            <button onClick={()=>deleteProduct(product._id)} className='btn btn-danger mt-3'>Delete</button>

                        </div>
                    )

                })
            }

        </div>
    );
};


export default AllProducts;