import { Component } from '@angular/core';

@Component({
  selector: 'app-pressure',
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.css']
})
export class PressureComponent  {

  constructor() { }

  megapascal = null;
  bar = null;
  kilopascal = null;
  hectopascal = null;
  pascal = null;
  physicalAtmosphere = null;
  technicalAtmosphere = null;
  tor = null;

  changeMegapascal(event) {
    this.bar = parseFloat(event.target.value) * 10;
    this.kilopascal = parseFloat(event.target.value) * 1000;
    this.hectopascal = parseFloat(event.target.value) * 10000;
    this.pascal = parseFloat(event.target.value) * 1000000;
    this.physicalAtmosphere = parseFloat(event.target.value) * 9.86923266716;
    this.technicalAtmosphere = parseFloat(event.target.value) * 10.1971621978;
    this.tor = this.pascal / 133.3223684211;

    if (event.target.value === '') {
      this.bar = 0;
      this.kilopascal = 0;
      this.hectopascal = 0;
      this.pascal = 0;
      this.physicalAtmosphere = 0;
      this.technicalAtmosphere = 0;
      this.tor = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.megapascal = '';
        this.bar = 0;
        this.kilopascal = 0;
        this.hectopascal = 0;
        this.pascal = 0;
        this.physicalAtmosphere = 0;
        this.technicalAtmosphere = 0;
        this.tor = 0;
      }
    }

    if (isNaN(this.bar)) {
      this.bar = '';
      this.kilopascal = '';
      this.hectopascal = '';
      this.pascal = '';
      this.physicalAtmosphere = '';
      this.technicalAtmosphere = '';
      this.tor = '';
    }
  }

  changeBar(event) {
    this.megapascal = parseFloat(event.target.value) / 10;
    this.kilopascal = parseFloat(event.target.value) * 100;
    this.hectopascal = parseFloat(event.target.value) * 1000;
    this.pascal = parseFloat(event.target.value) * 100000;
    this.physicalAtmosphere = parseFloat(event.target.value) * 0.986923266716;
    this.technicalAtmosphere = parseFloat(event.target.value) * 1.01971621978;
    this.tor = parseFloat(event.target.value) * 750.061682794;

    if (event.target.value === '') {
      this.megapascal = 0;
      this.kilopascal = 0;
      this.hectopascal = 0;
      this.pascal = 0;
      this.physicalAtmosphere = 0;
      this.technicalAtmosphere = 0;
      this.tor = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.megapascal = 0;
        this.bar = '';
        this.kilopascal = 0;
        this.hectopascal = 0;
        this.pascal = 0;
        this.physicalAtmosphere = 0;
        this.technicalAtmosphere = 0;
        this.tor = 0;
      }
    }

    if (isNaN(this.megapascal)) {
      this.megapascal = '';
      this.kilopascal = '';
      this.hectopascal = '';
      this.pascal = '';
      this.physicalAtmosphere = '';
      this.technicalAtmosphere = '';
      this.tor = '';
    }
  }

  changeKilopascal(event) {
    this.megapascal = parseFloat(event.target.value) / 1000;
    this.bar = parseFloat(event.target.value) / 100;
    this.hectopascal = parseFloat(event.target.value) * 10;
    this.pascal = parseFloat(event.target.value) * 1000;
    this.physicalAtmosphere = this.megapascal * 9.86923266716;
    this.technicalAtmosphere = this.megapascal * 10.1971621978;
    this.tor = this.pascal / 133.3223684211;

    if (event.target.value === '') {
      this.megapascal = 0;
      this.bar = 0;
      this.hectopascal = 0;
      this.pascal = 0;
      this.physicalAtmosphere = 0;
      this.technicalAtmosphere = 0;
      this.tor = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.megapascal = 0;
        this.bar = 0;
        this.kilopascal = '';
        this.hectopascal = 0;
        this.pascal = 0;
        this.physicalAtmosphere = 0;
        this.technicalAtmosphere = 0;
        this.tor = 0;
      }
    }

    if (isNaN(this.megapascal)) {
      this.megapascal = '';
      this.bar = '';
      this.hectopascal = '';
      this.pascal = '';
      this.physicalAtmosphere = '';
      this.technicalAtmosphere = '';
      this.tor = '';
    }
  }

  changeHectopascal(event) {
    this.megapascal = parseFloat(event.target.value) / 10000;
    this.bar = parseFloat(event.target.value) / 1000;
    this.kilopascal = parseFloat(event.target.value) / 10;
    this.pascal = parseFloat(event.target.value) * 100;
    this.physicalAtmosphere = this.megapascal * 9.86923266716;
    this.technicalAtmosphere = this.megapascal * 10.1971621978;
    this.tor = this.pascal / 133.3223684211;

    if (event.target.value === '') {
      this.megapascal = 0;
      this.bar = 0;
      this.kilopascal = 0;
      this.pascal = 0;
      this.physicalAtmosphere = 0;
      this.technicalAtmosphere = 0;
      this.tor = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.megapascal = 0;
        this.bar = 0;
        this.kilopascal = 0;
        this.hectopascal = '';
        this.pascal = 0;
        this.physicalAtmosphere = 0;
        this.technicalAtmosphere = 0;
        this.tor = 0;
      }
    }

    if (isNaN(this.megapascal)) {
      this.megapascal = '';
      this.bar = '';
      this.kilopascal = '';
      this.pascal = '';
      this.physicalAtmosphere = '';
      this.technicalAtmosphere = '';
      this.tor = '';
    }
  }

  changePascal(event) {
    this.megapascal = parseFloat(event.target.value) / 1000000;
    this.bar = parseFloat(event.target.value) / 100000;
    this.kilopascal = parseFloat(event.target.value) / 1000;
    this.hectopascal = parseFloat(event.target.value) / 100;
    this.physicalAtmosphere = this.megapascal * 9.86923266716;
    this.technicalAtmosphere = this.megapascal * 10.1971621978;
    this.tor = parseFloat(event.target.value) / 133.3223684211;

    if (event.target.value === '') {
      this.megapascal = 0;
      this.bar = 0;
      this.kilopascal = 0;
      this.hectopascal = 0;
      this.physicalAtmosphere = 0;
      this.technicalAtmosphere = 0;
      this.tor = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.megapascal = 0;
        this.bar = 0;
        this.kilopascal = 0;
        this.hectopascal = 0;
        this.pascal = '';
        this.physicalAtmosphere = 0;
        this.technicalAtmosphere = 0;
        this.tor = 0;
      }
    }

    if (isNaN(this.megapascal)) {
      this.megapascal = '';
      this.bar = '';
      this.kilopascal = '';
      this.hectopascal = '';
      this.physicalAtmosphere = '';
      this.technicalAtmosphere = '';
      this.tor = '';
    }
  }

  changePhysicalAtmosphere(event) {
    this.megapascal = parseFloat(event.target.value) / 9.86923266716;
    this.bar = this.megapascal * 10;
    this.kilopascal = this.megapascal * 1000;
    this.hectopascal = this.megapascal * 10000;
    this.pascal = this.megapascal * 1000000;
    this.tor = parseFloat(event.target.value) * 759.9999999998;
    this.technicalAtmosphere = parseFloat(event.target.value) * 1.0332274528;

    if (event.target.value === '') {
      this.megapascal = 0;
      this.bar = 0;
      this.kilopascal = 0;
      this.hectopascal = 0;
      this.pascal = 0;
      this.technicalAtmosphere = 0;
      this.tor = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.megapascal = 0;
        this.bar = 0;
        this.kilopascal = 0;
        this.hectopascal = 0;
        this.pascal = 0;
        this.physicalAtmosphere = '';
        this.technicalAtmosphere = 0;
        this.tor = 0;
      }
    }

    if (isNaN(this.megapascal)) {
      this.megapascal = '';
      this.bar = '';
      this.kilopascal = '';
      this.hectopascal = '';
      this.pascal = '';
      this.technicalAtmosphere = '';
      this.tor = '';
    }
  }

  changeTechnicalAtmosphere(event) {
    this.megapascal = parseFloat(event.target.value) / 10.1971621978;
    this.bar = this.megapascal * 10;
    this.kilopascal = this.megapascal * 1000;
    this.hectopascal = this.megapascal * 10000;
    this.pascal = this.megapascal * 1000000;
    this.physicalAtmosphere = parseFloat(event.target.value) / 1.0332274528;
    this.tor = parseFloat(event.target.value) * 735.5592400689;

    if (event.target.value === '') {
      this.megapascal = 0;
      this.bar = 0;
      this.kilopascal = 0;
      this.hectopascal = 0;
      this.pascal = 0;
      this.physicalAtmosphere = 0;
      this.tor = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.megapascal = 0;
        this.bar = 0;
        this.kilopascal = 0;
        this.hectopascal = 0;
        this.pascal = 0;
        this.physicalAtmosphere = 0;
        this.technicalAtmosphere = '';
        this.tor = 0;
      }
    }

    if (isNaN(this.megapascal)) {
      console.log(this.tor);
      this.megapascal = '';
      this.bar = '';
      this.kilopascal = '';
      this.hectopascal = '';
      this.pascal = '';
      this.physicalAtmosphere = '';
      this.tor = 0;
      console.log(this.tor);
    }
  }

  changeTor(event) {
    this.megapascal = parseFloat(event.target.value) / 7500.61682794;
    this.bar = this.megapascal * 10;
    this.kilopascal = this.megapascal * 1000;
    this.hectopascal = this.megapascal * 10000;
    this.pascal = this.megapascal * 1000000;
    this.physicalAtmosphere = parseFloat(event.target.value) / 759.9999999998;
    this.technicalAtmosphere = parseFloat(event.target.value) / 735.5592400689;

    if (event.target.value === '') {
      this.megapascal = 0;
      this.bar = 0;
      this.kilopascal = 0;
      this.hectopascal = 0;
      this.pascal = 0;
      this.physicalAtmosphere = 0;
      this.technicalAtmosphere = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.megapascal = 0;
        this.bar = 0;
        this.kilopascal = 0;
        this.hectopascal = 0;
        this.pascal = 0;
        this.physicalAtmosphere = 0;
        this.technicalAtmosphere = 0;
        this.tor = '';
      }
    }

    if (isNaN(this.megapascal)) {
      console.log(this.tor);
      this.megapascal = '';
      this.bar = '';
      this.kilopascal = '';
      this.hectopascal = '';
      this.pascal = '';
      this.physicalAtmosphere = '';
      this.technicalAtmosphere = '';
      this.tor = '';
      console.log(this.tor);
    }
  }
}
