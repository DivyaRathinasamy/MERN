import React, {useState} from 'react';
import axios from 'axios';
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import { useNavigate } from "react-router-dom";



const Form = (props) => {
    let [formInfo,setFormInfo] = useState({})
    let [formErrors, setFormErrors] =useState({})
    // let [errors, setErrors] = useState([])
    const navigate =useNavigate();
    

    const changeHandler =(e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })

    }

    // when submitting a incomplete form -> response looks like: response.data.error
    // when submitting a complete form -> response looks like: response.data.results

    // if there are any errors, then save the errors to a state variable

    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors",formInfo)
        .then(response=>{
            console.log("submitted",response)
            navigate("/")
            if(response.data.errors){
                setFormErrors(response.data.errors)
            }else{
                setFormErrors({})
                props.setSubmittedForm(!props.submittedForm)
            }
            
        })
        .catch(err =>console.log(err))

    }


    return (
        <div>
            <Link to="/">Home</Link>
            <h3>Add A New Author</h3>

            <form onSubmit ={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" className='form-control' onChange={changeHandler} />
                    <p className='text-danger'>{formErrors.name?.message}</p>
                </div>
                <input type="submit" value="Create" className='btn btn-success m-3' onChange={changeHandler} />
            </form>
        </div>
    );
};



export default Form;