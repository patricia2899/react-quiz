
import React from "react";

import Game from "./Game";
import CambioQuiz from "./CambioQuiz";
import { LangContext } from "../components/App";




export default function Quiz (props)  {  

  
   
  return <div id="main">
  
    <LangContext.Consumer>
				{(context) => {
          return <div>
            <div className="QuizApp">
              <Game quiz={props.quizzes[props.currentQuiz]} score={props.score}  />
              <CambioQuiz buscarQuiz = {props.buscarQuiz} />
              <h2> Respuesta: </h2>
					    <input  type="text" id="respuesta" placeholder="Respuesta"></input>
              <button className="siguiente" onClick={props.siguiente}>{context.dictionary["siguiente"]}</button>
              <button className="anterior" onClick={props.anterior}>{context.dictionary["anterior"]}</button>
              <button className="submit" onClick={props.submit}>{context.dictionary["submit"]}</button>
    
            </div>
          </div>
         }
         }		
      </LangContext.Consumer>	
  </div>
}
