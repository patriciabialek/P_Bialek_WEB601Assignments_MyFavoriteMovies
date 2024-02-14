import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayGrade',
  standalone: true
})
export class DisplayGradePipe implements PipeTransform {

  transform(value: any, parameter: string = ''): string {

    //If the value passed to the pipe is not a valid number or over 100, 
    //return the string "N/A".
    if (isNaN(value) || value > 100) {
      return "N/A";
    }

    //If the parameter passed to the pipe is empty or does not equal to "letterGrade":
    //If the value passed to the pipe is over 50, then return "Pass"
    //If the value passed to the pipei s under 50, then return "Fail"
    /*If the parameter passed to the pipe is equal to "letterGrade" then do the following:
If the value passed to the pipe is between 90-100 then return the string "A+"
If the value passed to the pipe is between 80-89 then return the string "A"
If the value passed to the pipe is between 70-79 then return the string "B"
If the value passed to the pipe is between 60-69 then return the string "C"
If the value passed to the pipe is between 50-59 then return the string "D"
if the value passed to the pipe is below 50 then return "F"*/
    if (parameter !== 'letterGrade') {
      return value > 50 ? "Pass" : "Fail";
    } else {
      if (value >= 90) {
        return "A+";
      } else if (value >= 80) {
        return "A";
      } else if (value >= 70) {
        return "B";
      } else if (value >= 60) {
        return "C";
      } else if (value >= 50) {
        return "D";
      } else {
        return "F";
      }
    }
  }
}
