import { Icon } from '@/shared/ui';

import { useState } from 'react';

import styles from './VacancyCard.module.css';

export const VacancyCard = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleShowEye = () => {
		setIsVisible(!isVisible);
	};

	return (
		<li
			onMouseEnter={handleShowEye}
			onMouseLeave={handleShowEye}
			className={styles.vacancyItem}
		>
			<a className={styles.vacancyLink} href="#">
				<article className={styles.vacancyCard}>
					<div className={styles.vacancyHeaderWrapper}>
						<div className={styles.vacancyHeader}>
							<h3 className={styles.vacancyTitle}>
								Junior Frontend-разработчик
							</h3>
							<span className={styles.vacancySalary}>от 30 000 ₽</span>
						</div>
						{isVisible && (
							<Icon name="eye" color="#C5C5C5" width="16" height="20" />
						)}
					</div>
					<div className={styles.vacancyContact}>
						<span className={styles.vacancyCompany}>Интернет Люди</span>
						<span className={styles.vacancyCity}>Ярославль</span>
					</div>
					<div className={styles.vacancyFooter}>
						<Icon name="experience" color="#5C89CE" width="12" height="12" />
						<span className={styles.vacancyExperience}>
							Опыт от 1 года до 3 лет
						</span>
					</div>
				</article>
			</a>
		</li>
	);
};
