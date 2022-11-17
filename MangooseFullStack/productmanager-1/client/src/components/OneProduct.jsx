import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const OneProduct = () => {
    const {id} = useParams()
    
    const [details,setDetails] = useState({})
    const[notFound, setNotFound] = useState(false)
    const navigate =useNavigate();
    

    useEffect(()=>{

        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response=>{
                console.log(response)
                if(response.data.results){
                    setDetails(response.data.results)

                }else{
                    setNotFound(true)
                }
            })
            .catch(err=>console.log(err))
    }, [])

 
    const deleteProduct =()=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(response=>{
            console.log(response)
            navigate("/")
        })
        .catch(err=>console.log(err))
    }



    return (
        <div>
            {
            notFound?
            <h3>Sorry Not Found!</h3>:
            <>
            <h3>Details of {details.name}</h3>
            <p>Price: {details.price}</p>
            <p>Description: {details.description}</p>
            <button onClick={deleteProduct} className='btn btn-danger'>Delete</button>
            </>
            }
        </div>
    );
};


export default OneProduct;