import React, { useState } from "react";
import axios from 'axios'; 


const AxiosPokemon = () => {

    // create state variable array to store the api results

    let [pokemons, setPokemons] = useState([])





    const getData = () => {

        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                console.log("response from api is ->", response)
                // save the pokemon info from the API into our state variable so that we can loop through this variable usin.map() in jsx area
                setPokemons(response.data.results);
            })
        .catch(err=>{
            console.log("Something is wrong",err)
        })

    }







    return (
        <div>
            <button onClick={getData}>Fetch Pokemon Data!!</button>
            {
               pokemons.map((pokemonObj) => {
                    return (
                        <div>
                            <h3>{pokemonObj.name}</h3>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default AxiosPokemon;