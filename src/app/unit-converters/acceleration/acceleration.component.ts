import { Component } from '@angular/core';

@Component({
  selector: 'app-acceleration',
  templateUrl: './acceleration.component.html',
  styleUrls: ['./acceleration.component.css']
})
export class AccelerationComponent  {

  constructor() { }

  gravitation = null;
  metterSecondSquere = null;
  footSecondSquere = null;
  gallon = null;


  changeGravitation(event) {
    this.metterSecondSquere = parseFloat(event.target.value) * 9.80665;
    this.footSecondSquere = parseFloat(event.target.value) * 32.17404856;
    this.gallon = parseFloat(event.target.value) * 980.665;

    if (event.target.value === '') {
      this.metterSecondSquere = 0;
      this.footSecondSquere = 0;
      this.gallon = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.gravitation = '';
        this.metterSecondSquere = 0;
        this.footSecondSquere = 0;
        this.gallon = 0;
      }
    }
  }

  changeMetterSecondSquere(event) {
    this.gravitation = parseFloat(event.target.value) * 0.10197162;
    this.footSecondSquere = parseFloat(event.target.value) * 3.2808399;
    this.gallon = parseFloat(event.target.value) * 100;

    if (event.target.value === '') {
      this.gravitation = 0;
      this.footSecondSquere = 0;
      this.gallon = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.gravitation = 0;
        this.metterSecondSquere = '';
        this.footSecondSquere = 0;
        this.gallon = 0;
      }
    }
  }

  changeFootSecondSquere(event) {
    this.gravitation = parseFloat(event.target.value) * 0.03108095;
    this.metterSecondSquere = parseFloat(event.target.value) * 0.3048;
    this.gallon = parseFloat(event.target.value) * 30.48;

    if (event.target.value === '') {
      this.gravitation = 0;
      this.metterSecondSquere = 0;
      this.gallon = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.gravitation = 0;
        this.metterSecondSquere = 0;
        this.footSecondSquere = '';
        this.gallon = 0;
      }
    }
  }

  changeGallon(event) {
    this.gravitation = parseFloat(event.target.value) * 0.00101972;
    this.metterSecondSquere = parseFloat(event.target.value) / 100;
    this.footSecondSquere = parseFloat(event.target.value) * 0.0328084;

    if (event.target.value === '') {
      this.gravitation = 0;
      this.metterSecondSquere = 0;
      this.footSecondSquere = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.gravitation = 0;
        this.metterSecondSquere = 0;
        this.footSecondSquere = 0;
        this.gallon = '';
      }
    }
  }
}
