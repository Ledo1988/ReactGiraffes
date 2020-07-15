import React from "react";
import {NavLink} from "react-router-dom";
import s from "./MenuItem.module.scss";

const MenuItem = (props) => {
	let classNames = ["link", props.className].join(" ");

	return (
		<NavLink to={props.to} activeClassName={s.listLinkActive} className={classNames}>
			<span className={s.listTitle}>{props.name}</span>
		</NavLink>
	)
}

export default MenuItem;
