import { Component } from '@angular/core';

@Component({
  selector: 'app-roman-numerals',
  templateUrl: './roman-numerals.component.html',
  styleUrls: ['./roman-numerals.component.css']
})
export class RomanNumeralsComponent {

  arabic = null;
  roman = null;
  arabicNumbers: Array<number> = [1000, 500, 100, 50, 10, 5, 1];
  arabicNumbers2: Array<number> = [900, 400, 90, 40, 9, 4];
  romanNumbers: Array<string> = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  roman2Numbers: Array<string> = ['CM', 'CD', 'XC', 'XL', 'IX', 'IV'];
  tab: Array<string> = [];
  tabjed: Array<string> = [];
  tabdz: Array<string> = [];
  tabset: Array<string> = [];
  tabtys: Array<string> = [];
  jed = 0;
  dz = 0;
  set = 0;
  tys = 0;
  suma = 0;
  error: string;

  changeArabic(event): void {
    this.arabic = event.target.value;
    length = this.arabic.length;
    if (parseFloat(this.arabic) > 3999) {
      this.roman = '';
    } else {
      if (length === 1) {
        this.jed = parseFloat(this.arabic);
      }
      if (length === 2) {
        this.dz = parseFloat(this.arabic[0]);
        this.jed = parseFloat(this.arabic[1]);
      }
      if (length === 3) {
        this.set = parseFloat(this.arabic[0]);
        this.dz = parseFloat(this.arabic[1]);
        this.jed = parseFloat(this.arabic[2]);
      }
      if (length === 4) {
        this.tys = parseFloat(this.arabic[0]);
        this.set = parseFloat(this.arabic[1]);
        this.dz = parseFloat(this.arabic[2]);
        this.jed = parseFloat(this.arabic[3]);
      }
      if (this.tys !== 0) {
        if (this.tys < 4) {
          let i = 1;
          this.tabtys = [];
          while (i <= this.tys) {
            this.tabtys.push('M');
            i++;
          }
        }
      }
      this.tys = 0;
      if (this.set !== 0) {
        if (this.set < 4) {
          let i = 1;
          this.tabset = [];
          while (i <= this.set) {
            this.tabset.push('C');
            i++;
          }
        }
        if (this.set === 4) {
          this.tabset = [];
          this.tabset.push('CD');
        }
        if (this.set === 5) {
          this.tabset = [];
          this.tabset.push('D');
        }
        if (this.set > 5 && this.set < 9) {
          let i = 6;
          this.tabset = [];
          this.tabset.push('D');
          while (i <= this.set) {
            this.tabset.push('C');
            i++;
          }
        }
        if (this.set === 9) {
          this.tabset = [];
          this.tabset.push('CM');
        }
      }
      this.set = 0;
      if (this.dz !== 0) {
        if (this.dz < 4) {
          let i = 1;
          this.tabdz = [];
          while (i <= this.dz) {
            this.tabdz.push('X');
            i++;
          }
        }
        if (this.dz === 4) {
          this.tabdz = [];
          this.tabdz.push('XL');
        }
        if (this.dz === 5) {
          this.tabdz = [];
          this.tabdz.push('L');
        }
        if (this.dz > 5 && this.dz < 9) {
          let i = 6;
          this.tabdz = [];
          this.tabdz.push('L');
          while (i <= this.dz) {
            this.tabdz.push('X');
            i++;
          }
        }
        if (this.dz === 9) {
          this.tabdz = [];
          this.tabdz.push('XC');
        }
      }
      this.dz = 0;
      if (this.jed !== 0) {
        if (this.jed < 4) {
          let i = 1;
          this.tabjed = [];
          while (i <= this.jed) {
            this.tabjed.push('I');
            i++;
          }
        }
        if (this.jed === 4) {
          this.tabjed = [];
          this.tabjed.push('IV');
        }
        if (this.jed === 5) {
          this.tabjed = [];
          this.tabjed.push('V');
        }
        if (this.jed > 5 && this.jed < 9) {
          let i = 6;
          this.tabjed = [];
          this.tabjed.push('V');
          while (i <= this.jed) {
            this.tabjed.push('I');
            i++;
          }
        }
        if (this.jed === 9) {
          this.tabjed = [];
          this.tabjed.push('IX');
        }
      }
    }
    this.tab.push(this.tabtys.join('') + this.tabset.join('') + this.tabdz.join('') + this.tabjed.join(''));
    this.roman = this.tab;
    this.tab = [];
    this.tabtys = [];
    this.tabset = [];
    this.tabdz = [];
    this.tabjed = [];
    if (this.arabic === '') {
      this.roman = '';
    }
  }

  changeRoman(event): void {
    this.roman = event.target.value;
    this.suma = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.roman.length; i++) {
      if (this.roman[i] === 'M') {
        if (this.roman[i - 1] === 'C') {
          if (this.roman[i + 1] === 'C' || this.roman[i + 1] === 'D' || this.roman[i + 1] === 'M') {
            this.suma = null;
            break;
          }
          if (this.roman[i - 2] === 'C') {
            this.suma = null;
            break;
          }
          this.suma = this.suma - 200;
        }
        if (this.roman[i + 3] === 'M') {
          this.suma = null;
          break;
        } else {
          this.suma = this.suma + 1000;
        }
        if (this.roman[i + 1] === 'D' && this.roman[i + 2] === 'C' && this.roman[i + 3] === 'D') {
          this.suma = null;
          break;
        }
      }
      if (this.roman[i] === 'D') {
        if (this.roman[i - 1] === 'C') {
          if (this.roman[i + 1] === 'C' || this.roman[i + 1] === 'D' || this.roman[i + 1] === 'M') {
            this.suma = null;
            break;
          }
          if (this.roman[i - 2] === 'C') {
            this.suma = null;
            break;
          }
          this.suma = this.suma - 200;
        }
        if (this.roman[i + 1] === 'D') {
          this.suma = null;
          break;
        } else {
          this.suma = this.suma + 500;
        }
        if (this.roman[i + 1] === 'M') {
          this.suma = null;
          break;
        }
        if (this.roman[i + 1] === 'C' && (this.roman[i + 2] === 'D' || this.roman[i + 2] === 'M')) {
          this.suma = null;
          break;
        }
      }
      if (this.roman[i] === 'C') {
        if (this.roman[i - 1] === 'X') {
          if (this.roman[i + 1] === 'X' || this.roman[i + 1] === 'L' || this.roman[i + 1] === 'C'
          || this.roman[i + 1] === 'D' || this.roman[i + 1] === 'M') {
            this.suma = null;
            break;
          }
          if (this.roman[i - 2] === 'X') {
            this.suma = null;
            break;
          }
          this.suma = this.suma - 20;
        }
        if (this.roman[i + 3] === 'C') {
          this.suma = null;
          break;
        } else {
          this.suma = this.suma + 100;
        }
      }
      if (this.roman[i] === 'L') {
        if (this.roman[i - 1] === 'X') {
          if (this.roman[i + 1] === 'X' || this.roman[i + 1] === 'C'
          || this.roman[i + 1] === 'D' || this.roman[i + 1] === 'M') {
            this.suma = null;
            break;
          }
          if (this.roman[i - 2] === 'X') {
            this.suma = null;
            break;
          }
          this.suma = this.suma - 20;
        }
        if (this.roman[i + 1] === 'L') {
          this.suma = null;
          break;
        } else {
          this.suma = this.suma + 50;
        }
        if (this.roman[i + 1] === 'C' || this.roman[i + 1] === 'D' || this.roman[i + 1] === 'M') {
          this.suma = null;
          break;
        }
        if (this.roman[i + 1] === 'X' && this.roman[i + 2] === 'L') {
          this.suma = null;
          break;
        }
      }
      if (this.roman[i] === 'X') {
        if (this.roman[i - 1] === 'I') {
          if (this.roman[i + 1] === 'I' || this.roman[i + 1] === 'X' || this.roman[i + 1] === 'V'
          || this.roman[i + 1] === 'L' || this.roman[i + 1] === 'C') {
            this.suma = null;
            break;
          }
          this.suma = this.suma - 2;
        }
        if (this.roman[i + 1] === 'X' && this.roman[i + 2] === 'X' && this.roman[i + 3] === 'X') {
          this.suma = null;
          break;
        } else {
          this.suma = this.suma + 10;
        }
        if (this.roman[i + 1] === 'D' || this.roman[i + 1] === 'M') {
          this.suma = null;
          break;
        }
      }
      if (this.roman[i] === 'V') {
        if (this.roman[i - 1] === 'I') {
          if (this.roman[i + 1] === 'I') {
            this.suma = null;
            break;
          }
          this.suma = this.suma - 2;
        }
        if (this.roman[i + 1] === 'V') {
          this.suma = null;
          break;
        } else {
          this.suma = this.suma + 5;
        }
        if (this.roman[i + 1] === 'X' || this.roman[i + 1] === 'L' || this.roman[i + 1] === 'C'
        || this.roman[i + 1] === 'D' || this.roman[i + 1] === 'M') {
          this.suma = null;
          break;
        }
        if (this.roman[i + 1] === 'I' && this.roman[i + 2] === 'V') {
          this.suma = null;
          break;
        }
      }
      if (this.roman[i] === 'I') {
        if (this.roman[i - 1] === 'I' && (this.roman[i + 1] === 'V' || this.roman[i + 1] === 'X')) {
          this.suma = null;
          break;
        }
        if (this.roman[i + 3] === 'I') {
          this.suma = null;
          break;
        } else {
          this.suma = this.suma + 1;
        }
        if (this.roman[i + 1] === 'L' || this.roman[i + 1] === 'C'
        || this.roman[i + 1] === 'D' || this.roman[i + 1] === 'M') {
          this.suma = null;
          break;
        }
      }
    }
    this.arabic = this.suma;
    if (this.roman === '') {
      this.arabic = '';
    }
  }

  changeRoman2(event) {
    this.roman = event.target.value;
    this.suma = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.roman.length; i++) {
      // tslint:disable-next-line: prefer-for-of
      for (let j = 0; j < this.romanNumbers.length; j++) {
        if (this.roman[i] === this.romanNumbers[j]) {
          this.suma = this.suma + this.arabicNumbers[j];
        }
      }
    }
    this.arabic = this.suma;
    if (this.roman === '') {
      this.arabic = '';
    }
  }
}
