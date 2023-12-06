export interface IVacancy{
	id: number,
	owner:any,
	post: string, //есть
	description:string, //есть
	work_time: string, //есть
	experience:string, //есть
	organization: string, //есть
	salary: number, //есть
	city: string, //есть
	responded: number[],
	date: string,
}