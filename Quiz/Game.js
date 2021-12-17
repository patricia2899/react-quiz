import React from 'react';
export default function Game(props) {
    
    return (
    <>
    <div className="Game"></div>
    <h2>Pregunta:</h2>
    <div> {props.quiz.question}</div>
    <div> {props.quiz.attachment.url = null ? "No hay imagen" : props.quiz.attachment.url} </div>
    <div>Nombre de usuario:  {props.quiz.author.username}</div>
    <div>Puntuación: {props.score} </div>
    </>
    );
    }
    