import { useContext } from "react";
import React from "react";
import LangSelector from "./LangSelector";
import { LangContext } from "./App";
import { NavLink } from "react-bootstrap";


export default function Navbar(props) {
	const lang = useContext(LangContext);
	return <><div className="header">
		<h1>{lang.dictionary["minigames"]}</h1>
		<LangSelector />
	       </div><LangContext.Consumer>
			{(context) => {
				return <div className="actions">
					<NavLink to={"/"}><button className="home">{context.dictionary["home"]}</button></NavLink>
					<NavLink to={"/quiz"}><button className="quizgame" >{context.dictionary["quizgame"]}</button></NavLink>
					<NavLink to={"/tictactoe"}><button className="tictactoegame">{context.dictionary["tictactoegame"]}</button></NavLink>
				</div>
			} }
		</LangContext.Consumer></>	
	}	
	