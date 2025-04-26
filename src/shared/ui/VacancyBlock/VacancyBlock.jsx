import { VacancyCard } from '..';
import styles from './VacancyBlock.module.css';

const CARD_DATA = Array(18).fill(null);

export const VacancyBlock = ({ title }) => {
	return (
		<div className={styles.vacancyBlock}>
			<h2 className={styles.vacancyListTitle}>{title}</h2>

			<ul className={styles.vacancyList}>
				{CARD_DATA.map((data, index) => (
					<VacancyCard key={`${index}-${Date.now}`} />
					// key need to change because this operation (Date.now) is so long!
				))}
			</ul>
		</div>
	);
};
