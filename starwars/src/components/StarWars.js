import React, {useState, useEffect} from "react"
// import axios from "axios"
import StarWarsCards from "./StarWarsCards/StarWarsCards"
import './StarWars.css';




function StarWars() {

    // relocated so getting people and planets is easier
    // const [starWarsCharacters, setStarWarsCharacters] = useState({})
    // useEffect(() => {

    //     axios.get(/*"https://swapi.co/api/people/"*/
    //     "https://lambda-swapi.herokuapp.com/api/people/")
    //         .then(response => {
    //             // console.log(response)
    //             setStarWarsCharacters(response.data.results)
    //             // response.data.results.forEach(character => {
    //                 // console.log(character)

    //                 // let keys = Object.keys(character)
    //                 // keys.forEach(key => {
    //                 //     console.log(character[key])
    //                 // })
    //             // })
    //         })
    //         .catch(error => {
    //             console.log(error.message)
    //         })
    // }, [])

    return (<StarWarsCards />)

}

export default StarWars;