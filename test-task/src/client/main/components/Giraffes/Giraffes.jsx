import React from "react";
import s from "./Giraffes.module.scss";
import {Route} from "react-router";
import Box1 from "./GiraffesBoxes/Box1";
import Box2 from "./GiraffesBoxes/Box2";
import Box3 from "./GiraffesBoxes/Box3";
import GiraffesHeader from "./GiraffesHeader/GiraffesHeader";

const Giraffes = (props) => {
	return (
		<div className="giraffes">
			<GiraffesHeader/>
			<div className="giraffes__box">
				<Route exact path="/" component={Box1}/>
				<Route path="/box2" component={Box2}/>
				<Route path="/box3" component={Box3}/>
			</div>
		</div>

	)
}

export default Giraffes;
