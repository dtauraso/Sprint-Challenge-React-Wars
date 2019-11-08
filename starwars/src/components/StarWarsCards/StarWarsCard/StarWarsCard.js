import React from "react"
import styled from "styled-components";


const Card = styled.div`

    display: flex;
    flex-direction: column;
    color: white;
    background: black;
    line-height: 2;
    width: 20%;
    padding: 5px;
    border: 1px dashed green;
    .left {
        text-align: left;

    }
`

function StarWarsCard(props) {

    // console.log(props)
    return (<Card>

                <h2>{props.character.name}</h2>
                <p className="left">Heigh: {props.character.height}</p>
                <p className="left">Mass: {props.character.mass}g</p>
                <p className="left">Eye color: {props.character.eye_color}</p>

            </Card>)



}

export default StarWarsCard;