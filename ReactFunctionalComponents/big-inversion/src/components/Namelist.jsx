import React from 'react';

const NameList = (props)=>{
    return(
        <div>
            <h1>Name: {props.firstname}, {props.lastname}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.haircolor}</p>
            <button></button>
        </div>
    )

}


export default NameList;