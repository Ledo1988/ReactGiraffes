import React from "react";
import s from "./Menu.module.scss";
import MenuItem from "../MenuItem/MenuItem";

const Menu = () => {
	return (
		<section className={s.menu}>
			<ul className={s.list}>
				<li className={`${s.listItem} ${s.listItemProfile}`}>
					<MenuItem />
				</li>
				<li className={`${s.listItem} ${s.listItemMessages}`}>
					<NavLink to="/management" activeClassName={s.listLinkActive} className={s.listLink}>
						<span className={s.listTitle}>Управление</span>
					</NavLink>
				</li>
				<li className={`${s.listItem} ${s.listItemNews}`}>
					<NavLink to="/giraffes" activeClassName={s.listLinkActive} className={s.listLink}>
						<span className={s.listTitle}>News</span>
					</NavLink>
				</li>
				<li className={`${s.listItem} ${s.listItemMusic}`}>
					<NavLink to="/staff" activeClassName={s.listLinkActive} className={s.listLink}>
						<span className={s.listTitle}>Music</span>
					</NavLink>
				</li>
				<li className={`${s.listItem} ${s.listItemSettings}`}>
					<NavLink to="/settings" activeClassName={s.listLinkActive} className={s.listLink}>
						<span className={s.listTitle}>Settings</span>
					</NavLink>
				</li>
			</ul>
		</section>
	)
}

export default Menu;
