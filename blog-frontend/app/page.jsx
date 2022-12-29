"use client"
import "../styles/layout.css";
import React, { useState } from 'react'


function homepage () {

    const cities = ["London", "Paris", "Tokyo", "Barcelona", "Italy", "Greece", "Uzbekistan", "Norway", "New-York", "Bangkok", "Singapore", "Dubai", 
"Portugal", "Australia", "You have no money to travel", "Nowhere", "Neverland", "we have been trying to reach you about your car's extended warranty", 
"Ooh, sorry, try next year", "Turkey", "Iceland", "Chile", "Mexico", "Korea", "Nepal", "India", "Thailand"];
    const [randomCity, setRandomCity] =useState('');
 

    const spinTheCompass = () => {

        const random = Math.floor(Math.random() * cities.length);
        const newCity = cities[random]
        setRandomCity(newCity);
    }

    return (
        <div className='welcoming-quote'>
            <h1>Live your life by a compass, not a clock!</h1>
            <div>
                <p>Where will you be travelling in 2023 ?</p>
                <button onClick={spinTheCompass}>Click to find out</button>
                <p>{randomCity}</p>
            </div>
            <a href='/destinations'>
            <button>Start exploring</button>
            </a>
        </div>
    )
}

export default homepage