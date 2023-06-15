import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}
  resultValue: number = 0;
  add(input: string): number {
    console.log(Array.from('some string')[0]);
    let splitingPosition;
    if(input == '') {
      this.resultValue = 0;
    } else if(!parseInt(input[0]) && input[0] != '-') {
      for (let index = 0; index < input.length; index++) {
        const char: string = input.charAt(index);
        if (/\d/.test(char)) {
          splitingPosition = index;
          break;
        }
      }
      const seprator: string[] = [input.slice(0, splitingPosition), input.slice(splitingPosition)];
      let sepratedValue = input.split(seprator[0]);
      console.log(sepratedValue);
      sepratedValue.map((value, index)=>{
        let testingVar = parseInt(value).toString;
        if (value.length != testingVar.length  && index != 0) {
          this.resultValue = undefined;
        }
      })
      if(this.resultValue != undefined) {
        let sum:number =0;
        sepratedValue.map((value)=>{
          let parseIntValue = parseInt(value).toString();
          if(parseInt(value)) {
            sum = sum + parseInt(value);
          }
        });
        this.resultValue = sum;
      }
      
    } else {
      this.resultValue = 0;
      input.split(',').map((a) => {
        let withOutSpace = a.replace(/\s/g, '');
        let convertToInt = parseInt(withOutSpace);
        let finalString  = convertToInt.toString();
        
        if(finalString.length != withOutSpace.length){
          this.resultValue = undefined;
        } else {
          this.resultValue = this.resultValue + parseInt(a);
        }
      });
    }
    return this.resultValue;
  }
}
