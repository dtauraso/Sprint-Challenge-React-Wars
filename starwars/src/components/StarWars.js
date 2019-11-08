import React, {useState, useEffect} from "react"
import axios from "axios"
import './StarWars.css';




function StarWars() {


    useEffect(() => {

        axios.get("https://swapi.co/api/people/")
            .then(response => {
                // console.log(response)
                response.data.results.forEach(character => {
                    // console.log(character)
                    let keys = Object.keys(character)
                    keys.forEach(key => {
                        console.log(character[key])
                    })
                })
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [])

    return (<div></div>)

}

export default StarWars;