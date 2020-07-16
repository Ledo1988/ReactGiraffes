import React from "react";
import s from "./GiraffesHeader.module.scss";
import GiraffesContact from "./GiraffesContact/GiraffesContact";
import BoxList from "./BoxList/BoxList";

const GiraffesHeader = (props) => {
	return (
		<div className={s.header}>
			<BoxList/>
			<GiraffesContact/>
		</div>
	)
}

export default GiraffesHeader;
