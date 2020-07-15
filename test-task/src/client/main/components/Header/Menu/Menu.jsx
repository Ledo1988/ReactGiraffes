import React from "react";
import s from "./Menu.module.scss";import {NavLink} from "react-router-dom";
import MenuItem from "../MenuItem/MenuItem";

const Menu = () => {
	return (
		<section className={s.menu}>
			<ul className={s.list}>
				<li className={`${s.listItem} ${s.listItemProfile}`}>
					<MenuItem to="/main" name="Главная" className="main"/>
				</li>
				<li className={`${s.listItem} ${s.listItemMessages}`}>
					<MenuItem to="/management" name="Управление" className="management"/>
				</li>
				<li className={`${s.listItem} ${s.listItemNews}`}>
					<MenuItem to="/giraffes" name="Жирафы" className="giraffes"/>
				</li>
				<li className={`${s.listItem} ${s.listItemMusic}`}>
					<MenuItem to="/staff" name="Сотрудники" className="staff"/>
				</li>
				<li className={`${s.listItem} ${s.listItemSettings}`}>
					<MenuItem to="/settings" name="Настройки" className="settings"/>
				</li>
				<li className={`${s.listItem} ${s.listItemSettings}`}>
					<MenuItem to="/support" name="Поддержка" className="support"/>
				</li>
			</ul>
		</section>
	)
}

export default Menu;
