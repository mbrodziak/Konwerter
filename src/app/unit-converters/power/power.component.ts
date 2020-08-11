import { Component } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent {

  constructor() { }

  megawatt = null;
  kilowatt = null;
  watt = null;
  milliwatt = null;
  horsepower = null;

  changeMegawatt(event) {
    this.kilowatt = parseFloat(event.target.value) * 1000;
    this.watt = parseFloat(event.target.value) * 1000000;
    this.milliwatt = parseFloat(event.target.value) * 1000000000;
    this.horsepower = this.watt / 745.699872;

    if (event.target.value === '') {
      this.kilowatt = 0;
      this.watt = 0;
      this.milliwatt = 0;
      this.horsepower = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.megawatt = '';
        this.kilowatt = 0;
        this.watt = 0;
        this.milliwatt = 0;
        this.horsepower = 0;
      }
    }
  }

  changeKilowatt(event) {
    this.megawatt = parseFloat(event.target.value) / 1000;
    this.watt = parseFloat(event.target.value) * 1000;
    this.milliwatt = parseFloat(event.target.value) * 1000000;
    this.horsepower = this.watt / 745.699872;

    if (event.target.value === '') {
      this.megawatt = 0;
      this.watt = 0;
      this.milliwatt = 0;
      this.horsepower = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.megawatt = 0;
        this.kilowatt = '';
        this.watt = 0;
        this.milliwatt = 0;
        this.horsepower = 0;
      }
    }
  }

  changeWatt(event) {
    this.megawatt = parseFloat(event.target.value) / 1000000;
    this.kilowatt = parseFloat(event.target.value) / 1000;
    this.milliwatt = parseFloat(event.target.value) * 1000;
    this.horsepower = parseFloat(event.target.value) / 745.699872;

    if (event.target.value === '') {
      this.megawatt = 0;
      this.kilowatt = 0;
      this.milliwatt = 0;
      this.horsepower = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.megawatt = 0;
        this.kilowatt = 0;
        this.watt = '';
        this.milliwatt = 0;
        this.horsepower = 0;
      }
    }
  }

  changeMilliwatt(event) {
    this.megawatt = parseFloat(event.target.value) / 1000000000;
    this.kilowatt = parseFloat(event.target.value) / 1000000;
    this.watt = parseFloat(event.target.value) / 1000;
    this.horsepower = this.watt / 745.699872;

    if (event.target.value === '') {
      this.megawatt = 0;
      this.kilowatt = 0;
      this.watt = 0;
      this.horsepower = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.megawatt = 0;
        this.kilowatt = 0;
        this.watt = 0;
        this.milliwatt = '';
        this.horsepower = 0;
      }
    }
  }

  changeHorsepower(event) {
    this.watt = parseFloat(event.target.value) * 745.699872;
    this.megawatt = this.watt / 1000000;
    this.kilowatt = this.watt / 1000;
    this.milliwatt = this.watt * 1000;

    if (event.target.value === '') {
      this.megawatt = 0;
      this.kilowatt = 0;
      this.watt = 0;
      this.milliwatt = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.megawatt = 0;
        this.kilowatt = 0;
        this.watt = 0;
        this.milliwatt = 0;
        this.horsepower = '';
      }
    }
  }
}
