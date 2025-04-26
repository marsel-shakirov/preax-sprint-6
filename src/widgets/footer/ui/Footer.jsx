import styles from './Footer.module.css';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<p className={styles.preax}>
					Проект выполнен в рамках стажировки&ensp;
					<a
						href="https://preax.ru"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.preaxLink}
						lang="en"
					>
						PREAX
					</a>
				</p>
			</div>
		</footer>
	);
};
