import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const AllAuthors = (props) => {

    let [authors, setAuthors] = useState([])
    let[deletedAuthor, setDeletedAuthor] =useState(false)

    useEffect(() => {

        axios.get("http://localhost:8000/api")

        
            .then(response => {
                setAuthors(response.data.results);
            })
            .catch(err =>console.log(err))

    },[deletedAuthor, props.submittedForm])


    
    const deleteAuthor =(id)=>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(response=>{
            console.log(response)
                setDeletedAuthor(!deletedAuthor)

        })
        .catch(err=>console.log(err))
    }


    return (
        <div>
            <h3>All Authors Below!</h3>
            <Link to="/authors" className="btn btn-primary mb-3">Add a New Author</Link>
    
            {
                authors.map((author)=>{
                    return (
                        <div key ={author._id} className='card mb-3'>
                            
                            <h2>Name: <Link to={`/authors/${author._id}`}> {author.name}</Link></h2>
                            <Link to={`/authors/edit/${author._id}`} className='btn btn-primary'>Edit {author.name}</Link>
                            <button onClick={()=>deleteAuthor(author._id)} className='btn btn-danger mt-3'>Delete</button>
                            

                        </div>
                    )
                    
                })
            }
                        
                
           
                
        </div>
    );
};


export default AllAuthors;