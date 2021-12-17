import React from 'react';

export default function Home(props){
    return (
        <div>
            <p>Welcome to my MiniGames App</p>
            <h2>{props.subtitle}</h2>
        </div>
    )
}