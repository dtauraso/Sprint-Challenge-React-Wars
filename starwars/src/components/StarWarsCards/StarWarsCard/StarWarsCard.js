import React from "react"
import styled from "styled-components";


const Card = styled.div`

    display: flex;
    flex-direction: column;
    color: white;
    background: black;
    line-height: 2;
    width: 30%;
    padding: 5px;
    border: 1px dashed green;
    .left {
        text-align: left;

    }
`

function StarWarsCard(props) {

    console.log(props)


    const setupCard = (cardData) => {

        if(cardData.isSelector.kind === "people") {
            return (
            <Card>
                <h2>{props.character.name}</h2>
                <p className="left">Height: {props.character.height}</p>
                <p className="left">Mass: {props.character.mass}g</p>
                <p className="left">Eye color: {props.character.eye_color}</p>

            </Card>
            
            )
        } else if(cardData.isSelector.kind === "planets"){
            return (
            <Card>
                <h2>{props.character.name}</h2>
                <p className="left">Climate: {props.character.climate}</p>
                <p className="left">Diameter: {props.character.diameter}km</p>
                <p className="left">Terrain: {props.character.terrain}</p>

            </Card>
            )
        }
    }
    return (

                setupCard(props)

    )



}

export default StarWarsCard;