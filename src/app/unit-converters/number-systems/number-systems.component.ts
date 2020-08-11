import { Component } from '@angular/core';
import { ConverterService } from 'src/app/services/converter.service';

@Component({
  selector: 'app-number-systems',
  templateUrl: './number-systems.component.html',
  styleUrls: ['./number-systems.component.css']
})
export class NumberSystemsComponent {


  constructor(private converterService: ConverterService) { }

  decimal = null;
  binary = null;
  octal = null;
  hexadecimal = null;
  ieee = null;
  // binaryArray: Array<number> = [];

  changeDecimal(event): void {
    if (event.target.value === '') {
      this.binary = 0;
      this.octal = 0;
      this.hexadecimal = 0;
    } else {
      this.binary = this.decimalToBinary(parseFloat(event.target.value));
      this.octal = this.decimalToOctal(parseFloat(event.target.value));
      this.hexadecimal = this.decimalToHex(parseFloat(event.target.value));
    }
  }

  changeBinary(event): void {
    if (event.target.value === '') {
      this.decimal = 0;
      this.octal = 0;
      this.hexadecimal = 0;
    } else {
      this.decimal = this.toDecimal(event.target.value, 2);
      this.octal = this.decimalToOctal(this.decimal);
      this.hexadecimal = this.decimalToHex(this.decimal);
    }
  }

  changeOctal(event): void {
    if (event.target.value === '') {
      this.decimal = 0;
      this.binary = 0;
      this.hexadecimal = 0;
    } else {
      this.decimal = this.toDecimal(event.target.value, 8);
      this.binary = this.decimalToBinary(this.decimal);
      this.hexadecimal = this.decimalToHex(this.decimal);
    }
  }

  changeHexadecimal(event): void {
    if (event.target.value === '') {
      this.decimal = 0;
      this.binary = 0;
      this.octal = 0;
    } else {
      const hexNumber = event.target.value;
      console.log(hexNumber);
      const hex = [];
      let l = null;
      for (let i = hexNumber.length - 1; i >= 0; i--) {
        l = hexNumber[i];
        switch (l) {
          case 'A':
            hex[i] = '10';
            break;
          case 'B':
            hex[i] = '11';
            break;
          case 'C':
            hex[i] = '12';
            break;
          case 'D':
            hex[i] = '13';
            break;
          case 'E':
            hex[i] = '14';
            break;
          case 'F':
            hex[i] = '15';
            break;
          default:
            hex[i] = hexNumber[i];
        }
      }
      this.decimal = this.toDecimal(hex, 16);
      this.binary = this.decimalToBinary(this.decimal);
      this.octal = this.decimalToOctal(this.decimal);
    }
  }

  changeIEEENumber(event): void {

  }

  decimalToBinary(decimalNumber: number): string {
    const binaryArray: Array<string> = [];
    let binaryNumber = '';
    while (decimalNumber >= 1) {
      if (decimalNumber % 2 === 0) {
        binaryArray.push('0');
      } else {
        binaryArray.push('1');
      }
      decimalNumber = Math.floor(decimalNumber / 2);
    }
    binaryNumber = binaryArray.reverse().join('');
    return binaryNumber;
  }

  decimalToOctal(decimalNumber) {
    const octalArray: Array<number> = [];
    let octalNumber = '';
    // let dec = decimalNumber;
    while (decimalNumber >= 1) {
      octalArray.push(decimalNumber % 8);
      decimalNumber = Math.floor(decimalNumber / 8);
    }
    octalNumber = octalArray.reverse().join('');
    return octalNumber;
  }

  decimalToHex(decimalNumber) {
    const hexArray: Array<string> = [];
    let hexNumber = '';
    let rest = 0;
    while (decimalNumber >= 1) {
      rest = decimalNumber % 16;
      if (rest < 9) {
        hexArray.push((decimalNumber % 16).toString());
      } else {
        if (rest === 10) {
          hexArray.push('A');
        }
        if (rest === 11) {
          hexArray.push('B');
        }
        if (rest === 12) {
          hexArray.push('C');
        }
        if (rest === 13) {
          hexArray.push('D');
        }
        if (rest === 14) {
          hexArray.push('E');
        }
        if (rest === 15) {
          hexArray.push('F');
        }
      }
      decimalNumber = Math.floor(decimalNumber / 16);
    }
    hexNumber = hexArray.reverse().join('');
    return hexNumber;
  }

  toDecimal(binaryNumber: any, base: number): number {
    let j = 0;
    let decNumber = 0;
    for (let i = binaryNumber.length - 1; i >= 0; i--) {
      decNumber = decNumber + (binaryNumber[i] * Math.pow(base, j));
      j++;
    }
    return decNumber;
  }
}
