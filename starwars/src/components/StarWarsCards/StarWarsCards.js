import React, {useState, useEffect} from "react"
import StarWarsCard from "./StarWarsCard/StarWarsCard";
import axios from "axios"
import styled from "styled-components";

// import './StarWarsCards.css';

const Cards = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-around;  //doesn't work
    max-width: 900px;
    border: 1px solid black;
    padding: 1rem;
    margin: 0% auto;

`

function StarWarsCards() {

    const [starWarsCharacters, setStarWarsCharacters] = useState([])
    const [isSelector, setIsSelector] = useState({
        clicked: false,
        kind: "people"
    })
    const [planets, setPlanets] = useState({})

    useEffect(() => {
        if(isSelector.kind === "people") {
            axios.get(/*"https://swapi.co/api/people/"*/
            "https://lambda-swapi.herokuapp.com/api/people/")
                .then(response => {
                    // console.log(response)
    
                    setStarWarsCharacters(response.data.results)
                    // response.data.results.forEach(character => {
                        // console.log(character)
    
                        // let keys = Object.keys(character)
                        // keys.forEach(key => {
                        //     console.log(character[key])
                        // })
                    // })
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
        
    }, [isSelector])

    useEffect(() => {
        if(isSelector.kind === "planets") {

            axios.get(/*"https://swapi.co/api/people/"*/
            "https://lambda-swapi.herokuapp.com/api/planets/")
                .then(response => {
                    console.log(response.data.results)
                    // if(isSelector.kind === "planets") {
                        setStarWarsCharacters(response.data.results)
                        // console.log(isSelector.kind)
        
                    // }
                    // response.data.results.forEach(character => {
                        // console.log(character)

                        // let keys = Object.keys(character)
                        // keys.forEach(key => {
                        //     console.log(character[key])
                        // })
                    // })
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
    }, [isSelector])

    // flip the selector data so it's ready for the next butten press
    const clickedPlanet = () => {
        if(isSelector.clicked === true) {
            setIsSelector({
                clicked: false,
                kind: "planets"
            })
        } else {
            setIsSelector({
                clicked: true,
                kind: "planets"
            })
        }
    }
    const clickedPeople = () => {
        if(isSelector.clicked === true) {
            setIsSelector({
                clicked: false,
                kind: "people"
            })
        } else {
            setIsSelector({
                clicked: true,
                kind: "people"
            })
        }
    }
    // characters={starWarsCharacters}
    // console.log("start", starWarsCharacters, starWarsCharacters === [])

    if(starWarsCharacters.length === 0) {
        // not showing up
        console.log("here")

        return (<div>Loading...</div>)

    } else {
        // console.log("ready to display")
        // console.log(starWarsCharacters)

        // have to convert an array(it claims it's an array) to an array to use forEach
        let startWarsCharacters = Array.from(starWarsCharacters)
        
        // startWarsCharacters.forEach((character) => {
        //     console.log(character)
        // })
        return (
            <div>
                <button onClick={() => {
                    clickedPlanet()
                }}>Get planets</button>
                <button onClick={() => {
                    clickedPeople()
                }}>Get people</button>
                <Cards>
                 {startWarsCharacters.map(character => {
                    return <StarWarsCard key={character.name} character={character} isSelector={isSelector}/>
                })}
            </Cards>
            </div>
           
           

        )
    }


}

export default StarWarsCards;