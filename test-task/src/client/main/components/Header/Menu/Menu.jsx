import React from "react";
import s from "./Menu.module.scss";
import MenuItem from "../MenuItem/MenuItem";
import home from '../../../img/icons/ico_home.svg';

const Menu = () => {
	return (
		<section className={s.menu}>
			<ul className={s.list}>
				<li className={s.listItem}>
					<MenuItem to="/main"
							  name="Главная"
							  className="main"
							  svgClass={'beige'}
							  svgSrc={'home'}
							  svgHeight={27}
							  svgWidth={28}/>
				</li>
				<li className={s.listItem}>
					<MenuItem to="/management"
							  name="Управление"
							  className="management"
							  svgClass={'beige'}
							  svgSrc={'management'}
							  svgHeight={24}
							  svgWidth={28}/>
				</li>
			<li className={s.listItem}>
					<MenuItem exact={true}
						to="/"
							  name="Жирафы"
							  className="giraffes"
							  svgClass={'beige'}
							  svgSrc={'giraffes'}
							  svgHeight={24}
							  svgWidth={28}/>
				</li>
				<li className={s.listItem}>
					<MenuItem to="/staff"
							  name="Сотрудники"
							  className="staff"
							  svgClass={'beige'}
							  svgSrc={'staff'}
							  svgHeight={30}
							  svgWidth={28}/>
				</li>
				<li className={s.listItem}>
					<MenuItem to="/settings"
							  name="Настройки"
							  className="settings"
							  svgClass={'beige'}
							  svgSrc={'settings'}
							  svgHeight={24}
							  svgWidth={28}/>
				</li>
				<li className={s.listItem}>
					<MenuItem to="/support"
							  name="Поддержка"
							  className="support"
							  svgClass={'beige'}
							  svgSrc={'support'}
							  svgHeight={24}
							  svgWidth={28}/>
				</li>
			</ul>
		</section>
	)
}

export default Menu;
