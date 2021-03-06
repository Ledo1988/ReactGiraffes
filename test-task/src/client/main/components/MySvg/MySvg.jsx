import React from "react";
import sprite from "../../img/sprite.svg";

const MySvg = (props) => {
	return (
		<svg className={props.class} height={props.height} width={props.width}>
			<use xlinkHref={`${sprite}#ico_${props.name}`} />
		</svg>
	)
}

export default MySvg;
