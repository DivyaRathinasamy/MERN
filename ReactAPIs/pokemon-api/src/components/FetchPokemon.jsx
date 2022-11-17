import React, { useState } from "react";


const FetchPokemon = () => {

    // create state variable array to store the api results

    let [pokemons, setPokemons] = useState([])





    const getData = () => {

        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                // parsing the response as json(a format that computer can understand)
                return response.json()
            })
            .then(response => {
                console.log("response from api is ->", response)
                // save the pokemon info from the API into our state variable so that we can loop through this variable usin.map() in jsx area
                setPokemons(response.results);
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

export default FetchPokemon;