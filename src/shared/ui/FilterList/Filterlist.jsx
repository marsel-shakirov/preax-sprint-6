import { FilterItem } from '@/shared/ui';
import styles from './FilterList.module.css';

const FILTER_ITEMS = [
	{
		text: 'Город',
		svgName: 'vector',
		color: '#5C89CE',
		modal: false,
	},
	{
		text: 'Тип занятости',
		svgName: 'briefcase',
		color: '#5C89CE',
		modal: true,
	},
	{
		text: 'Дополнительные фильтры',
		svgName: 'filter',
		color: '#5C89CE',
		modal: true,
	},
];

export const FilterList = () => {
	return (
		<section className={styles.filter}>
			<ul className={styles.filterList}>
				{FILTER_ITEMS.map(({ text, svgName, color, modal }, index) => (
					<FilterItem
						key={`${index}-${svgName}`}
						text={text}
						svgName={svgName}
						color={color}
						modal={modal}
					/>
				))}
			</ul>
		</section>
	);
};
