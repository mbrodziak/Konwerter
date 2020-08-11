import { Component } from '@angular/core';
import { ConverterService } from 'src/app/services/converter.service';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.css']
})
export class EnergyComponent  {

  constructor(private converterService: ConverterService) { }

  kilowatthour = null;
  watthour = null;
  megajoule = null;
  kilojoule = null;
  joule = null;
  kilogramometter = null;
  erg = null;
  // round = 2;
  // electronvolt = null;

  changeKilowatthour(event) {
    this.watthour = parseFloat(event.target.value) * 1000;
    this.megajoule = parseFloat(event.target.value) * 3.6;
    this.kilojoule = parseFloat(event.target.value) * 3600;
    this.joule = parseFloat(event.target.value) * 3600000;
    this.kilogramometter = this.joule / 9.80665;
    this.erg = this.joule * 10000000;

    if (event.target.value === '') {
      this.watthour = 0;
      this.megajoule = 0;
      this.kilojoule = 0;
      this.joule = 0;
      this.kilogramometter = 0;
      this.erg = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilowatthour = '';
        this.watthour = 0;
        this.megajoule = 0;
        this.kilojoule = 0;
        this.joule = 0;
        this.kilogramometter = 0;
        this.erg = 0;
      }
    }
  }

  changeWatthour(event) {
    this.kilowatthour = parseFloat(event.target.value) / 1000;
    this.megajoule = parseFloat(event.target.value) * 0.0036;
    this.kilojoule = parseFloat(event.target.value) * 3.6;
    this.joule = parseFloat(event.target.value) * 3600;
    this.kilogramometter = parseFloat(event.target.value) * 367.0978;
    this.erg = this.joule * 10000000;

    if (event.target.value === '') {
      this.kilowatthour = 0;
      this.megajoule = 0;
      this.kilojoule = 0;
      this.joule = 0;
      this.kilogramometter = 0;
      this.erg = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilowatthour = 0;
        this.watthour = '';
        this.megajoule = 0;
        this.kilojoule = 0;
        this.joule = 0;
        this.kilogramometter = 0;
        this.erg = 0;
      }
    }
  }

  changeMegajoule(event) {
    this.kilowatthour = parseFloat(event.target.value) / 3.600;
    this.watthour = parseFloat(event.target.value) / 0.003600;
    this.kilojoule = parseFloat(event.target.value) * 1000;
    this.joule = parseFloat(event.target.value) * 1000000;
    this.kilogramometter = this.joule / 9.80665;
    this.erg = parseFloat(event.target.value) * 10000000000000;

    if (event.target.value === '') {
      this.kilowatthour = 0;
      this.watthour = 0;
      this.kilojoule = 0;
      this.joule = 0;
      this.kilogramometter = 0;
      this.erg = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilowatthour = 0;
        this.watthour = 0;
        this.megajoule = '';
        this.kilojoule = 0;
        this.joule = 0;
        this.kilogramometter = 0;
        this.erg = 0;
      }
    }
  }

  changeKilojoule(event) {
    this.kilowatthour = parseFloat(event.target.value) / 3600;
    this.watthour = parseFloat(event.target.value) / 3.600;
    this.megajoule = parseFloat(event.target.value) / 1000;
    this.joule = parseFloat(event.target.value) * 1000;
    this.kilogramometter = this.joule / 9.80665;
    this.erg = parseFloat(event.target.value) * 10000000000;

    if (event.target.value === '') {
      this.kilowatthour = 0;
      this.watthour = 0;
      this.megajoule = 0;
      this.joule = 0;
      this.kilogramometter = 0;
      this.erg = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilowatthour = 0;
        this.watthour = 0;
        this.megajoule = 0;
        this.kilojoule = '';
        this.joule = 0;
        this.kilogramometter = 0;
        this.erg = 0;
      }
    }
  }

  changeJoule(event) {
    this.kilowatthour = parseFloat(event.target.value) / 3600000;
    this.watthour = parseFloat(event.target.value) / 3600;
    this.megajoule = parseFloat(event.target.value) / 1000000;
    this.kilojoule = parseFloat(event.target.value) / 1000;
    this.kilogramometter = parseFloat(event.target.value) / 9.80665;
    this.erg = parseFloat(event.target.value) * 10000000;

    if (event.target.value === '') {
      this.kilowatthour = 0;
      this.watthour = 0;
      this.megajoule = 0;
      this.kilojoule = 0;
      this.kilogramometter = 0;
      this.erg = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilowatthour = 0;
        this.watthour = 0;
        this.megajoule = 0;
        this.kilojoule = 0;
        this.joule = '';
        this.kilogramometter = 0;
        this.erg = 0;
      }
    }
  }

  changeKilogramometter(event) {
    this.kilowatthour = this.watthour / 1000;
    this.watthour = parseFloat(event.target.value) / 370.3704;
    this.megajoule = this.kilojoule / 1000;
    this.kilojoule = this.joule / 1000;
    this.joule = parseFloat(event.target.value) * 9.80665;
    this.erg = this.joule * 10000000;

    if (event.target.value === '') {
      this.kilowatthour = 0;
      this.watthour = 0;
      this.megajoule = 0;
      this.kilojoule = 0;
      this.joule = 0;
      this.erg = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilowatthour = 0;
        this.watthour = 0;
        this.megajoule = 0;
        this.kilojoule = 0;
        this.joule = 0;
        this.kilogramometter = '';
        this.erg = 0;
      }
    }
  }

  changeErg(event) {
    this.kilowatthour = this.joule / 3600000;
    this.watthour = this.joule / 3600;
    this.megajoule = parseFloat(event.target.value) / 10000000000000;
    this.kilojoule = parseFloat(event.target.value) / 10000000000;
    this.joule = parseFloat(event.target.value) / 10000000;
    this.kilogramometter = this.joule / 9.80665;

    if (event.target.value === '') {
      this.kilowatthour = 0;
      this.watthour = 0;
      this.megajoule = 0;
      this.kilojoule = 0;
      this.joule = 0;
      this.kilogramometter = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilowatthour = 0;
        this.watthour = 0;
        this.megajoule = 0;
        this.kilojoule = 0;
        this.joule = 0;
        this.kilogramometter = 0;
        this.erg = '';
      }
    }
  }
}
