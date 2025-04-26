import Icons from '/public/sprite/sprite.svg';

export const Icon = ({ name, color, width = 16, height = 16 }) => (
	<svg className={`icon-${name}`} fill={color} width={width} height={height}>
		<use xlinkHref={`${Icons}#icon-${name}`} />
	</svg>
);
