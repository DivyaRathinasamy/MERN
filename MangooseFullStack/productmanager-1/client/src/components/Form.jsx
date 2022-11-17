import React, {useState} from 'react';
import axios from 'axios';


const Form = (props) => {
    let [formInfo,setFormInfo] = useState({})
    let [formErrors, setFormErrors] =useState({})
    // let [errors, setErrors] = useState([])

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
        axios.post("http://localhost:8000/api/products",formInfo)
        .then(response=>{
            console.log("submitted",response)
            if(response.data.errors){
                setFormErrors(response.data.errors)
            }else{
                setFormErrors({})
                props.setSubmittedForm(!props.submittedForm)
            }
            
        })
        .catch(err =>console.log(err))
        // .catch(err=>{
        //     console.log(err)
        //     const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        //     const errorArr = []; // Define a temp error array to push the messages in
        //     for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
        //         errorArr.push(errorResponse[key].message)
        //     }
        //     // Set Errors
        //     setErrors(errorArr);
        // })            


    }


    return (
        <div>
            <h3>Create A New Product</h3>
            <form onSubmit ={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" className='form-control' onChange={changeHandler} />
                    <p className='text-danger'>{formErrors.name?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input type="Number" name="price" className='form-control' onChange={changeHandler} />
                    <p className='text-danger'>{formErrors.price?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" name="description" className='form-control' onChange={changeHandler} />
                    <p className='text-danger'>{formErrors.description?.message}</p>
                </div>
                <input type="submit" value="Create" className='btn btn-success m-3' onChange={changeHandler} />
            </form>
        </div>
    );
};



export default Form;