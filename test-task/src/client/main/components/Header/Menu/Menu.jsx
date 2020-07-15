import React from "react";
import s from "./Menu.module.scss";
import MenuItem from "../MenuItem/MenuItem";
import home from '../../../img/ico_home.svg';

const Menu = () => {
	return (
		<section className={s.menu}>
			<ul className={s.list}>
				<li className={s.listItem}>

					<MenuItem to="/main" name="Главная"
							  className="main"
							  svgSrc={'home'}
					svgHeight={25}
					svgWidth={24}
					svgFill={'red'}/>
				</li>
				<li className={s.listItem}>
					<MenuItem to="/management" name="Управление" className="management"/>
				</li>
			<li className={s.listItem}>
					<MenuItem to="/giraffes" name="Жирафы" className="giraffes"/>
				</li>
				<li className={s.listItem}>
					<MenuItem to="/staff" name="Сотрудники" className="staff"/>
				</li>
				<li className={s.listItem}>
					<MenuItem to="/settings" name="Настройки" className="settings"/>
				</li>
				<li className={s.listItem}>
					<MenuItem to="/support" name="Поддержка" className="support"/>
				</li>
			</ul>
		</section>
	)
}

export default Menu;
