import React from "react";
import s from "./BoxList.module.scss";
import {NavLink} from "react-router-dom";

const BoxList = (props) => {
	return (
		<ul className="boxes">
			<li>
				<NavLink exact to="/"
						 name="Вольер1">
					<span className={s.linkTitle}>Вольер1</span>
				</NavLink>
			</li>
			<li>
				<NavLink exact to="/box2"
						 name="Вольер2">
					<span className={s.linkTitle}>Вольер2</span>
				</NavLink>
			</li>
			<li>
				<NavLink exact to="/box3"
						 name="Вольер3">
					<span className={s.linkTitle}>Вольер3</span>
				</NavLink>
			</li>
		</ul>
	)
}

export default BoxList;
