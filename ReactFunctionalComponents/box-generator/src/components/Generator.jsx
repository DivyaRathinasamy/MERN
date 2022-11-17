import React, { useState } from "react";


const Generator = () => {
    // create state variable
    let [color, setColor] = useState("");

    // adding a property for colors related to checkbox feature
    // ========================================================



    // array called listofcolors where we can store every colors that gets submitted
    let [listOfColors,setListOfColors]= useState([]);

    // function that runs when the form submitted
    const addColor = (e)=>{
        // this will prevent the form submission from reloading the page
        e.preventDefault(); 
        console.log("Submitted",color);

        let colorObj = {color};
        console.log(colorObj);

        // update the listofcolors array using its setter(setlistofcolors) to be a copy of whatever is already in list of colors(...listofcolors) and add the recently submitted addcolor to it(addcolor)
        setListOfColors([...listOfColors,colorObj])
    }

    // function to delete color
    const deleteColor =(e,idx)=>{
        console.log("Delete Color!",idx)

        // make a copy of our array of pets (industry best practice  to not directly modify the state variable)
        // let copyOfcolorList = [...listOfColors];


        // modify the copy
        let filteredCopy = listOfColors.filter((color,i)=>{
            return i!=idx
        })

        // update the state variable to be the new copy using the setter(setListOfColors)
        setListOfColors(filteredCopy)
    }


    return (
        <>
            <h2>Generate The Box!</h2>
            <h3>Have Fun With Colors :-)</h3>
            <form onSubmit={addColor}>
                <div className="form-group">
                    <label>Color:</label>
                    <input onChange={(e)=>setColor(e.target.value)} type="text" className="form-control" />

                </div>
                <input type="submit" value="Add" className="btn btn-success mt-3" />


            </form>
            <hr />
            {
                listOfColors.map((color,idx)=>{
                    return(
                        <div key={idx} className ="color" style={{backgroundColor:color.color}}>
                            {/* <h3>Color:{color.color}</h3> */}
                            <button onClick ={(e)=>deleteColor(e,idx)} className="btn btn-danger">Delete</button>
                        </div>
                    )
                })
            }


        </>

    )
}

export default Generator;