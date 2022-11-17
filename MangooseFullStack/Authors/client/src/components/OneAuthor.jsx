import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";

const OneAuthor = () => {
    const {id} = useParams()
    
    const [details,setDetails] = useState({})
    const[notFound, setNotFound] = useState(false)
    const navigate =useNavigate();
    

    useEffect(()=>{

        axios.get(`http://localhost:8000/api/authors/${id}`)
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

 
    const deleteAuthor =()=>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(response=>{
            console.log(response)
            navigate("/")
        })
        .catch(err=>console.log(err))
    }



    return (
        <div>
             <Link to="/">Home</Link>
            {
            notFound?
            <h3>Sorry Not Found!</h3>:
            <>
            <h3>Name: {details.name}</h3>
            <button onClick={deleteAuthor} className='btn btn-danger'>Delete</button>
            </>
            }
        </div>
    );
};


export default OneAuthor;