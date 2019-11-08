import React from "react"
import StarWarsCard from "./StarWarsCard/StarWarsCard";
// import { format } from "path";
import styled from "styled-components";

// import './StarWarsCards.css';

const Cards = styled.div`

    display: flex;
    max-width: 900px;
    border: 1px solid black;
    padding: 1rem;

`

function StarWarsCards(props) {


    if(props === {}) {
        // not showing up
        return (<div>Loading...</div>)

    } else {
        console.log(props.characters)

        // have to convert an array(it claims it's an array) to an array to use forEach
        let startWarsCharacters = Array.from(props.characters)
        
        // startWarsCharacters.forEach((character) => {
        //     console.log(character)
        // })
        return (
            <Cards>
                 {startWarsCharacters.map(character => {
                    return <StarWarsCard key={character.name} character={character}/>
                })}
            </Cards>
           

        )
    }


}

export default StarWarsCards;