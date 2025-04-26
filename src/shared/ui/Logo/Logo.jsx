import LogoCareer from '/public/images/svg/logo.svg?react';

import styles from './Logo.module.css';

export const Logo = () => {
	return (
		<a className={styles.logo} href="/">
			<LogoCareer width="170" height="24" />
			<span className="visually-hidden">Главная</span>
		</a>
	);
};
