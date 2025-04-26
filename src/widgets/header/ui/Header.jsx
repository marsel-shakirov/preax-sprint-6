import { Logo } from '@/shared/ui';
import styles from './Header.module.css';

export const Header = () => {
	return (
		<header className={`${styles.header}`}>
			<div className={`${styles.headerWrapper} container`}>
				<Logo />

				<nav className={styles.nav}>
					<ul className={styles.navList}>
						<li className={styles.navItem}>
							<a href="#" className={`${styles.navLink} ${styles.active}`}>
								Поиск вакансий
							</a>
						</li>
						<li className={styles.navItem}>
							<a href="#" className={styles.navLink}>
								Избранные вакансии
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
