export interface ICreateVacancy{
	post: string, //есть
	work_time: string, //есть
	experience:string, //есть
	description:string, //есть
	salary: number, //есть
	organization: string, //есть
	organizationImage64: string | ArrayBuffer | null,
	city: string, //есть
}