import { Component } from '@angular/core';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.css']
})
export class LengthComponent {

  // meter = 1;
  // hectometer = this.meter / 100;
  // kilometer = this.meter / 1000;
  // megameter = this.meter / 1000000;
  // gigameter = this.meter / 1000000000;
  // terameter =  this.meter / 1000000000000;
  // decimeter = this.meter * 10;
  // centimeter = this.meter * 100;
  // millimeter = this.meter * 1000;
  // micrometer = this.meter * 1000000;
  // nanometer = this.meter * 1000000000;

  meter = null;
  hectometer = null;
  kilometer = null;
  megameter = null;
  gigameter = null;
  terameter = null;
  decimeter = null;
  centimeter = null;
  millimeter = null;
  micrometer = null;
  nanometer = null;
  results: Array<any>;

  constructor() { }

  changeTerameters(event): void {
    this.gigameter = parseFloat(event.target.value) * 1000;
    this.megameter = parseFloat(event.target.value) * 1000000;
    this.kilometer = parseFloat(event.target.value) * 1000000000;
    this.hectometer = parseFloat(event.target.value) * 10000000000;
    this.meter = parseFloat(event.target.value) * 1000000000000;
    this.decimeter = parseFloat(event.target.value) * 10000000000000;
    this.centimeter = parseFloat(event.target.value) * 100000000000000;
    this.millimeter = parseFloat(event.target.value) * 1000000000000000;
    this.micrometer = parseFloat(event.target.value) * 1000000000000000000;
    this.nanometer = parseFloat(event.target.value) * 1000000000000000000000;

    if (event.target.value === '') {
      this.gigameter = 0;
      this.megameter = 0;
      this.kilometer = 0;
      this.hectometer = 0;
      this.meter = 0;
      this.decimeter = 0;
      this.centimeter = 0;
      this.millimeter = 0;
      this.micrometer = 0;
      this.nanometer = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.terameter = '';
        this.gigameter = 0;
        this.megameter = 0;
        this.kilometer = 0;
        this.hectometer = 0;
        this.meter = 0;
        this.decimeter = 0;
        this.centimeter = 0;
        this.millimeter = 0;
        this.micrometer = 0;
        this.nanometer = 0;
      }
    }
  }

  changeGigameters(event): void {
    this.terameter = parseFloat(event.target.value) / 1000;
    this.megameter = parseFloat(event.target.value) * 1000;
    this.kilometer = parseFloat(event.target.value) * 1000000;
    this.hectometer = parseFloat(event.target.value) * 10000000;
    this.meter = parseFloat(event.target.value) * 1000000000;
    this.decimeter = parseFloat(event.target.value) * 10000000000;
    this.centimeter = parseFloat(event.target.value) * 100000000000;
    this.millimeter = parseFloat(event.target.value) * 1000000000000;
    this.micrometer = parseFloat(event.target.value) * 1000000000000000;
    this.nanometer = parseFloat(event.target.value) * 1000000000000000000;

    if (event.target.value === '') {
      this.terameter = 0;
      this.megameter = 0;
      this.kilometer = 0;
      this.hectometer = 0;
      this.meter = 0;
      this.decimeter = 0;
      this.centimeter = 0;
      this.millimeter = 0;
      this.micrometer = 0;
      this.nanometer = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.terameter = 0;
        this.gigameter = '';
        this.megameter = 0;
        this.kilometer = 0;
        this.hectometer = 0;
        this.meter = 0;
        this.decimeter = 0;
        this.centimeter = 0;
        this.millimeter = 0;
        this.micrometer = 0;
        this.nanometer = 0;
      }
    }
  }

  changeMegameters(event): void {
    this.terameter = parseFloat(event.target.value) / 1000000;
    this.gigameter = parseFloat(event.target.value) / 1000;
    this.kilometer = parseFloat(event.target.value) * 1000;
    this.hectometer = parseFloat(event.target.value) * 10000;
    this.meter = parseFloat(event.target.value) * 1000000;
    this.decimeter = parseFloat(event.target.value) * 10000000;
    this.centimeter = parseFloat(event.target.value) * 100000000;
    this.millimeter = parseFloat(event.target.value) * 1000000000;
    this.micrometer = parseFloat(event.target.value) * 1000000000000;
    this.nanometer = parseFloat(event.target.value) * 1000000000000000;

    if (event.target.value === '') {
      this.terameter = 0;
      this.gigameter = 0;
      this.kilometer = 0;
      this.hectometer = 0;
      this.meter = 0;
      this.decimeter = 0;
      this.centimeter = 0;
      this.millimeter = 0;
      this.micrometer = 0;
      this.nanometer = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.terameter = 0;
        this.gigameter = 0;
        this.megameter = '';
        this.kilometer = 0;
        this.hectometer = 0;
        this.meter = 0;
        this.decimeter = 0;
        this.centimeter = 0;
        this.millimeter = 0;
        this.micrometer = 0;
        this.nanometer = 0;
      }
    }
  }

  changeKilometers(event): void {
    this.terameter = parseFloat(event.target.value) / 1000000000;
    this.gigameter = parseFloat(event.target.value) / 1000000;
    this.megameter = parseFloat(event.target.value) / 1000;
    this.hectometer = parseFloat(event.target.value) * 10;
    this.meter = parseFloat(event.target.value) * 1000;
    this.decimeter = parseFloat(event.target.value) * 10000;
    this.centimeter = parseFloat(event.target.value) * 100000;
    this.millimeter = parseFloat(event.target.value) * 1000000;
    this.micrometer = parseFloat(event.target.value) * 1000000000;
    this.nanometer = parseFloat(event.target.value) * 1000000000000;

    if (event.target.value === '') {
      this.terameter = 0;
      this.gigameter = 0;
      this.megameter = 0;
      this.hectometer = 0;
      this.meter = 0;
      this.decimeter = 0;
      this.centimeter = 0;
      this.millimeter = 0;
      this.micrometer = 0;
      this.nanometer = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.terameter = 0;
        this.gigameter = 0;
        this.megameter = 0;
        this.kilometer = '';
        this.hectometer = 0;
        this.meter = 0;
        this.decimeter = 0;
        this.centimeter = 0;
        this.millimeter = 0;
        this.micrometer = 0;
        this.nanometer = 0;
      }
    }
  }

  changeHectometers(event): void {
    this.terameter = parseFloat(event.target.value) / 10000000000;
    this.gigameter = parseFloat(event.target.value) / 10000000;
    this.megameter = parseFloat(event.target.value) / 10000;
    this.kilometer = parseFloat(event.target.value) / 10;
    this.meter = parseFloat(event.target.value) * 100;
    this.decimeter = parseFloat(event.target.value) * 1000;
    this.centimeter = parseFloat(event.target.value) * 10000;
    this.millimeter = parseFloat(event.target.value) * 100000;
    this.micrometer = parseFloat(event.target.value) * 100000000;
    this.nanometer = parseFloat(event.target.value) * 100000000000;

    if (event.target.value === '') {
      this.terameter = 0;
      this.gigameter = 0;
      this.megameter = 0;
      this.kilometer = 0;
      this.meter = 0;
      this.decimeter = 0;
      this.centimeter = 0;
      this.millimeter = 0;
      this.micrometer = 0;
      this.nanometer = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.terameter = 0;
        this.gigameter = 0;
        this.megameter = 0;
        this.kilometer = 0;
        this.hectometer = '';
        this.meter = 0;
        this.decimeter = 0;
        this.centimeter = 0;
        this.millimeter = 0;
        this.micrometer = 0;
        this.nanometer = 0;
      }
    }
  }

  changeMeters(event): void {
    this.terameter = parseFloat(event.target.value) / 1000000000000;
    this.gigameter = parseFloat(event.target.value) / 1000000000;
    this.megameter = parseFloat(event.target.value) / 1000000;
    this.kilometer = parseFloat(event.target.value) / 1000;
    this.hectometer = parseFloat(event.target.value) / 100;
    this.decimeter = parseFloat(event.target.value) * 10;
    this.centimeter = parseFloat(event.target.value) * 100;
    this.millimeter = parseFloat(event.target.value) * 1000;
    this.micrometer = parseFloat(event.target.value) * 1000000;
    this.nanometer = parseFloat(event.target.value) * 1000000000;

    if (event.target.value === '') {
      this.terameter = 0;
      this.gigameter = 0;
      this.megameter = 0;
      this.kilometer = 0;
      this.hectometer = 0;
      this.decimeter = 0;
      this.centimeter = 0;
      this.millimeter = 0;
      this.micrometer = 0;
      this.nanometer = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.terameter = 0;
        this.gigameter = 0;
        this.megameter = 0;
        this.kilometer = 0;
        this.hectometer = 0;
        this.meter = '';
        this.decimeter = 0;
        this.centimeter = 0;
        this.millimeter = 0;
        this.micrometer = 0;
        this.nanometer = 0;
      }
    }
  }

  changeDecimeters(event): void {
    this.terameter = parseFloat(event.target.value) / 10000000000000;
    this.gigameter = parseFloat(event.target.value) / 10000000000;
    this.megameter = parseFloat(event.target.value) / 10000000;
    this.kilometer = parseFloat(event.target.value) / 10000;
    this.hectometer = parseFloat(event.target.value) / 1000;
    this.meter = parseFloat(event.target.value) / 10;
    this.centimeter = parseFloat(event.target.value) * 10;
    this.millimeter = parseFloat(event.target.value) * 100;
    this.micrometer = parseFloat(event.target.value) * 100000;
    this.nanometer = parseFloat(event.target.value) * 100000000;

    if (event.target.value === '') {
      this.terameter = 0;
      this.gigameter = 0;
      this.megameter = 0;
      this.kilometer = 0;
      this.hectometer = 0;
      this.meter = 0;
      this.centimeter = 0;
      this.millimeter = 0;
      this.micrometer = 0;
      this.nanometer = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.terameter = 0;
        this.gigameter = 0;
        this.megameter = 0;
        this.kilometer = 0;
        this.hectometer = 0;
        this.meter = 0;
        this.decimeter = '';
        this.centimeter = 0;
        this.millimeter = 0;
        this.micrometer = 0;
        this.nanometer = 0;
      }
    }
  }

  changeCentimeters(event): void {
    this.terameter = parseFloat(event.target.value) / 100000000000000;
    this.gigameter = parseFloat(event.target.value) / 100000000000;
    this.megameter = parseFloat(event.target.value) / 100000000;
    this.kilometer = parseFloat(event.target.value) / 100000;
    this.hectometer = parseFloat(event.target.value) / 10000;
    this.meter = parseFloat(event.target.value) / 100;
    this.decimeter = parseFloat(event.target.value) / 10;
    this.millimeter = parseFloat(event.target.value) * 10;
    this.micrometer = parseFloat(event.target.value) * 10000;
    this.nanometer = parseFloat(event.target.value) * 10000000;

    if (event.target.value === '') {
      this.terameter = 0;
      this.gigameter = 0;
      this.megameter = 0;
      this.kilometer = 0;
      this.hectometer = 0;
      this.meter = 0;
      this.decimeter = 0;
      this.millimeter = 0;
      this.micrometer = 0;
      this.nanometer = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.terameter = 0;
        this.gigameter = 0;
        this.megameter = 0;
        this.kilometer = 0;
        this.hectometer = 0;
        this.meter = 0;
        this.decimeter = 0;
        this.centimeter = '';
        this.millimeter = 0;
        this.micrometer = 0;
        this.nanometer = 0;
      }
    }
  }

  changeMillimeters(event): void {
    this.terameter = parseFloat(event.target.value) / 1000000000000000;
    this.gigameter = parseFloat(event.target.value) / 1000000000000;
    this.megameter = parseFloat(event.target.value) / 1000000000;
    this.kilometer = parseFloat(event.target.value) / 1000000;
    this.hectometer = parseFloat(event.target.value) / 100000;
    this.meter = parseFloat(event.target.value) / 1000;
    this.decimeter = parseFloat(event.target.value) / 100;
    this.centimeter = parseFloat(event.target.value) / 10;
    this.micrometer = parseFloat(event.target.value) * 1000;
    this.nanometer = parseFloat(event.target.value) * 1000000;

    if (this.millimeter === '') {
      this.terameter = 0;
      this.gigameter = 0;
      this.megameter = 0;
      this.kilometer = 0;
      this.hectometer = 0;
      this.meter = 0;
      this.decimeter = 0;
      this.centimeter = 0;
      this.micrometer = 0;
      this.nanometer = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.terameter = 0;
        this.gigameter = 0;
        this.megameter = 0;
        this.kilometer = 0;
        this.hectometer = 0;
        this.meter = 0;
        this.decimeter = 0;
        this.centimeter = 0;
        this.millimeter = '';
        this.micrometer = 0;
        this.nanometer = 0;
      }
    }
  }

  changeMicrometers(event): void {
    this.terameter = parseFloat(event.target.value) / 1000000000000000000;
    this.gigameter = parseFloat(event.target.value) / 1000000000000000;
    this.megameter = parseFloat(event.target.value) / 1000000000000;
    this.kilometer = parseFloat(event.target.value) / 1000000000;
    this.hectometer = parseFloat(event.target.value) / 100000000;
    this.meter = parseFloat(event.target.value) / 1000000;
    this.decimeter = parseFloat(event.target.value) / 100000;
    this.centimeter = parseFloat(event.target.value) / 10000;
    this.millimeter = parseFloat(event.target.value) / 1000;
    this.nanometer = parseFloat(event.target.value) * 1000;

    if (event.target.value === '') {
      this.terameter = 0;
      this.gigameter = 0;
      this.megameter = 0;
      this.kilometer = 0;
      this.hectometer = 0;
      this.meter = 0;
      this.decimeter = 0;
      this.centimeter = 0;
      this.millimeter = 0;
      this.nanometer = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.terameter = 0;
        this.gigameter = 0;
        this.megameter = 0;
        this.kilometer = 0;
        this.hectometer = 0;
        this.meter = 0;
        this.decimeter = 0;
        this.centimeter = 0;
        this.millimeter = 0;
        this.micrometer = '';
        this.nanometer = 0;
      }
    }
  }

  changeNanometers(event): void {
    this.terameter = parseFloat(event.target.value) / 1000000000000000000000;
    this.gigameter = parseFloat(event.target.value) / 1000000000000000000;
    this.megameter = parseFloat(event.target.value) / 1000000000000000;
    this.kilometer = parseFloat(event.target.value) / 1000000000000;
    this.hectometer = parseFloat(event.target.value) / 100000000000;
    this.meter = parseFloat(event.target.value) / 1000000000;
    this.decimeter = parseFloat(event.target.value) / 100000000;
    this.centimeter = parseFloat(event.target.value) / 10000000;
    this.millimeter = parseFloat(event.target.value) / 1000000;
    this.micrometer = parseFloat(event.target.value) / 1000;

    if (event.target.value === '') {
      this.terameter = 0;
      this.gigameter = 0;
      this.megameter = 0;
      this.kilometer = 0;
      this.hectometer = 0;
      this.meter = 0;
      this.decimeter = 0;
      this.centimeter = 0;
      this.millimeter = 0;
      this.micrometer = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.terameter = 0;
        this.gigameter = 0;
        this.megameter = 0;
        this.kilometer = 0;
        this.hectometer = 0;
        this.meter = 0;
        this.decimeter = 0;
        this.centimeter = 0;
        this.millimeter = 0;
        this.micrometer = 0;
        this.nanometer = '';
      }
    }
  }
}
