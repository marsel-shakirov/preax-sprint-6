import { VacancyBlock } from '..';
import styles from './VacancyList.module.css';

const DAYS = ['Сегодня, 5 февраля'];

export const VacancyList = () => {
	return (
		<section className={styles.vacancyList}>
			{DAYS.map((elementTitle, index) => (
				<VacancyBlock key={`${index}-${elementTitle}`} title={elementTitle} />
			))}
		</section>
	);
};
