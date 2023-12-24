export interface IVacancy{
	id: number,
	owner:any,
	post: string, //есть
	description:string, //есть
	work_time: string, //есть
	experience:number, //есть
	organization: string, //есть
	organizationImage64: string | ArrayBuffer | null,
	salary: number, //есть
	city: string, //есть
	responded: number[],
	date: string,
}