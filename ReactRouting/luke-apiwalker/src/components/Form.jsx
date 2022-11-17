import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


const Form = () => {
    let[category,setCategory] = useState("people")
    let[id,setId] = useState("")
    const navigate = useNavigate();

    // when the form is sumbitted ==> redirect
    const submitHandler = (e) =>{
        e.preventDefault();
        navigate(`/${category}/${id}`)


    }
    


    return (
        <div>
            <form onSubmit={submitHandler} className="d-flex align-items-center justify-content-center gap-5">
                <div className="form-group">
                    <label>Search for:</label>
                    <select onChange={(e)=>setCategory(e.target.value)}>
                        <option value ="people">people</option>
                        <option value ="planets">planets</option>
                        <option value ="films">films</option>
                        <option value ="species">species</option>
                        <option value ="vehicles">vehicles</option>
                    </select>  
                </div>
                <div className="form-group">
                    <label>ID:</label>
                    <input onChange={(e)=>setId(e.target.value)} type="number" />

                </div>
                <input type="submit" value="Search" className="btn btn-primary" />
            </form>
        </div>
    )


}

export default Form;