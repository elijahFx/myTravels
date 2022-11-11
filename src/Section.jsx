import React from "react"
import ReactDOM from "react-dom"
import Card from "./Card"
import data from './data'

export default function Section(){
    const newArray = data.map(place => {
        return <Card key={place.id} place={place}/>
    })
    return (
        <main>
            {newArray}
        </main>
    )
}