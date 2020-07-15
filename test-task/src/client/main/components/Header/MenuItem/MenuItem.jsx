import React from "react";
import {NavLink} from "react-router-dom";
import s from "./MenuItem.module.scss";
import MySvg from "../../MySvg/MySvg";

const MenuItem = (props) => {
	let classNames = ["link", props.className].join(" ");

	return (
		<NavLink to={props.to} activeClassName={s.linkActive} className={classNames}>
			<MySvg name={props.svgSrc} height={props.svgHeight} width={props.svgWidth} fill={props.svgFill} />
			<span className={s.linkTitle}>{props.name}</span>
		</NavLink>
	)
}

export default MenuItem;
