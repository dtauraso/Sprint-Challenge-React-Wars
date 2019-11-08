import React from "react"




function StarWarsCard(props) {

    console.log(props.character)
    return (<div>

        <h2>{props.character.name}</h2>
    <p>{}</p>
    </div>)



}

export default StarWarsCard;