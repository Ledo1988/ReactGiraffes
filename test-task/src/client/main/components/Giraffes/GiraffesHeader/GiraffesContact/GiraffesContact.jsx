import React from "react";
import s from "./GiraffesContact.module.scss";
import MySvg from "../../../MySvg/MySvg";
import logo from "../../../../img/img_logo.png";

const Box = (props) => {
	return (
		<div className={s.contacts}>
			<a href="/" className={s.linkAlert}>
				<MySvg class={'green'} name={'bell'} width={21} height={28}  />
			</a>
			<a href="mailto:hello@giraffe.com" className={s.linkMail}>
				<img className={s.linkImg} src={logo}/>
				<span className={s.linkTitle}>hello@giraffe.com</span>
			</a>
		</div>
	)
}

export default Box;
