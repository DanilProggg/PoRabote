export interface IResume{
	id: number,
	fullname: string,
	owner:any,
	phone: string,
	post: string,
	sex: string,
	age:any,
	experience: number,
	additional:string,
	personalQualities: string,
	city: string,
	date: string,
	photoImage64: string | ArrayBuffer | null,
	responded: number[],
}