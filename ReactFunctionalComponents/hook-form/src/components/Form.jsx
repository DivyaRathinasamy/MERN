import React, {useState} from "react";

const Form = ()=>{
    // create state variable to keep  track of form information
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmpassword] = useState("");  


    return(
        <div className ="container">
            <h3>Fill This Form Below</h3>
            <form>
                <div className="form-group">
                    <label>First Name:</label>
                    <input onChange = {(e)=>setFirstname(e.target.value)} type="text" className ="form-control" />
                    {
                        firstname.length < 2 && firstname.length > 0 ? <p className="text-danger">Name must be atleast 2 characters Long!!</p> : null
                    }

                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input onChange = {(e)=>setLastname(e.target.value)} type="text" className ="form-control" />
                    {
                        lastname.length < 2 && lastname.length > 0 ? <p className="text-danger">Name must be atleast 2 characters Long!!</p> : null
                    }

                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input onChange = {(e)=>setEmail(e.target.value)}  type="email" className ="form-control" />
                    {
                        email.length < 5 && email.length > 0 ? <p className="text-danger">Email must be atleast 5 characters Long!!</p> : null
                    }
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input onChange = {(e)=>setPassword(e.target.value)} type="password" className ="form-control" />
                    {
                        password.length < 8 && firstname.length > 0 ? <p className="text-danger">Password must be atleast 8 characters Long!!</p> : null
                    }
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input onChange = {(e)=>setConfirmpassword(e.target.value)} type="password" className ="form-control" />
                    {
                        password !== confirmpassword ? <p className="text-danger">Password and Confirm Password must Match!!</p> : null
                    }
                </div>
            </form>
            <h1>{password == confirmpassword}</h1>
            <hr/>
            <strong>Your Info:</strong>
            <p>First Name:{firstname}</p>
            <p>Last Name:{lastname}</p>
            <p>Email:{email}</p>
            <p>Password:{password}</p>
            <p>Confirm Password:{confirmpassword}</p>
        </div>
    )

}


export default Form;