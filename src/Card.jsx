import React from "react"
import ReactDOM from "react-dom"

export default function Card(props){
    return (
        <section>
                <img className="placeImg" src={props.place.imageUrl}/>
                <div className="wrapper">

                    <div className="container-1"><img className="badge" src="./public/location.png"/>
                    <p className="placeCountry">{(props.place.location).toUpperCase()}</p>
                    
                    <a target="_blank" href={props.place.googleMapsUrl}>Найти на Google Maps</a>
                    </div>

                <h2 className="placeTitle">{props.place.title}</h2>
                <h3 className="placeDate"><span id="start">{props.place.startDate}</span> - <span id="end">{props.place.endDate}</span></h3>
                <p className="desription">{props.place.description}</p>
                </div>
                
        </section>
    )
}