import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import { useParams } from "react-router";

const Info = () => {
    // everytime a state variable updates, the components re-renders
    // everytime the component re-renders, all the code in the component,re-runs

    const {category, id } = useParams();
    console.log("id is:",id)

    let [details, setDetails] =useState({});

    useEffect(()=>{

        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then((response=>{
                console.log("response is this: ",response)
                setDetails(response.data)
    
            }))
            .catch(err=>{
                console.log(err)
            })

    },[id,category])



    return (
        <div>
            {
                category =="people"?
                <>
                <h1>Name:{details.name}</h1>
                <h3>Height:{details.height}</h3>
                <h3>Mass:{details.mass}kg</h3>
                <h3>Hair Color:{details.hair_color}</h3>
                <h3>Skin Color:{details.skin_color}</h3>
                
                </>:category == "planets"?

                <>
                <h1>Name:{details.name}</h1>
                <h3>Diameter:{details.diameter}cm</h3>
                <h3>Climate:{details.climate}</h3>
                <h3>Terrain:{details.terrain}</h3>
                <h3>Population:{details.population}</h3>
                
                </>: null
            }

        </div>
    );
};

Info.propTypes = {};

export default Info;