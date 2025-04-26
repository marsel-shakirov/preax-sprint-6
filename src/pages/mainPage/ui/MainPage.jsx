import { FilterList, VacancyList } from '@/shared/ui';

export const MainPage = () => {
	return (
		<main>
			<div className="container">
				<h1 className="visually-hidden">Главная страница вакансий</h1>
				<FilterList />
				<VacancyList />
			</div>
		</main>
	);
};
