import React from "react";
import s from "./Header.module.scss";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

const Header = () => {
	return (
		<header className={s.header}>
			<Logo/>
			<Menu/>
		</header>
	)
}

export default Header;
