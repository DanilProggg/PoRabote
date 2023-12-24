import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experience'
})
export class ExperiencePipe implements PipeTransform {

  transform(value: number): string {
    if(value==1){
      return "1 год";
    }
    else if(value==2){
      return "2 года";
    }
    else if(value==3){
      return "3 года";
    }
    else if(value==4){
      return "4 года";
    }
    else if(value==5){
      return "5 лет";
    }
    else if(value==6){
      return "6 лет";
    }
    else if(value==7){
      return "7 лет";
    }
    else if(value==8){
      return "8 лет";
    }
    else if(value==9){
      return "9 лет";
    }
    else if(value==10){
      return "10 лет";
    }
    else if(value>10){
      return "Более 10 лет";
    }
    else{
      return "Нет";
    }
  }

}
