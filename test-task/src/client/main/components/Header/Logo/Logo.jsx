import React from "react";
import s from "./Logo.module.scss";
import logo from '../../../img/img_logo.png';

const Logo = () => {
	return (
		<a href='/' className={s.link}>
			<div className={s.img}><img src={logo}/></div>
			<div className={s.title}><span className={s.titleBold}>Ферма Заслуженных Жирафов</span> России и СНГ</div>
		</a>
	)
}

export default Logo;
