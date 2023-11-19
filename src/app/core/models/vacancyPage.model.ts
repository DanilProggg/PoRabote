import { IVacancy } from './vacancy.model';
export interface IPageVacancy{
	content:IVacancy[],
	empty: boolean,
	first: boolean,
	last: boolean,
	number: number,
	numberOfElements: number,
	size: number,
	totalElements: number,
	totalPages: number,
} 