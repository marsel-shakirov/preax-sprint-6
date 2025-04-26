import { Icon } from '@/shared/ui';

import styles from './FilterItem.module.css';

export const FilterItem = ({ text, svgName, color, modal }) => {
	return (
		<li className={styles.filterItem}>
			{modal && (
				<button type="button" className={styles.filterButton}>
					<div className={styles.filterWrapper}>
						<Icon name={svgName} color={color} />
						<span>{text}</span>
					</div>
					<Icon name="arrow" color="red" height="12" width="12" />
				</button>
			)}
			{!modal && (
				<label className={styles.filterLabel}>
					<span className={styles.filterLabelIcon}>
						<Icon name={svgName} color={color} />
					</span>
					<input
						type="text"
						className={styles.filterInput}
						placeholder={text}
					/>
					<span className="visually-hidden">{text}</span>
				</label>
			)}
		</li>
	);
};
