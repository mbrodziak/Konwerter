import { Component } from '@angular/core';

@Component({
  selector: 'app-force',
  templateUrl: './force.component.html',
  styleUrls: ['./force.component.css']
})
export class ForceComponent {

  constructor() { }

  kilonewton = null;
  newton = null;
  kilogramForce = null;
  gramForce = null;
  funtForce = null;
  ounceForce = null;
  poundal = null;
  dyne = null;


  changeKilonewton(event) {
    this.newton = parseFloat(event.target.value) * 1000;
    this.kilogramForce = parseFloat(event.target.value) * 101.9716213;
    this.gramForce = this.kilogramForce * 1000;
    this.funtForce = parseFloat(event.target.value) * 224.80894;
    this.ounceForce = parseFloat(event.target.value) * 3596.94309;
    this.poundal = parseFloat(event.target.value) * 7233.01385;
    this.dyne = parseFloat(event.target.value) * 100000000;

    if (event.target.value === '') {
      this.newton = 0;
      this.kilogramForce = 0;
      this.gramForce = 0;
      this.funtForce = 0;
      this.ounceForce = 0;
      this.poundal = 0;
      this.dyne = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilonewton = '';
        this.newton = 0;
        this.kilogramForce = 0;
        this.gramForce = 0;
        this.funtForce = 0;
        this.ounceForce = 0;
        this.poundal = 0;
        this.dyne = 0;
      }
    }
  }

  changeNewton(event) {
    this.kilonewton = parseFloat(event.target.value) / 1000;
    this.gramForce = parseFloat(event.target.value) * 101.9716213;
    this.kilogramForce = this.gramForce / 1000;
    this.funtForce = parseFloat(event.target.value) * 0.22480894;
    this.ounceForce = parseFloat(event.target.value) * 3.59694309;
    this.poundal = parseFloat(event.target.value) * 7.23301385;
    this.dyne = parseFloat(event.target.value) * 100000;

    if (event.target.value === '') {
      this.kilonewton = 0;
      this.kilogramForce = 0;
      this.gramForce = 0;
      this.funtForce = 0;
      this.ounceForce = 0;
      this.poundal = 0;
      this.dyne = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilonewton = 0;
        this.newton = '';
        this.kilogramForce = 0;
        this.gramForce = 0;
        this.funtForce = 0;
        this.ounceForce = 0;
        this.poundal = 0;
        this.dyne = 0;
      }
    }
  }

  changeKilogramForce(event) {
    this.newton = parseFloat(event.target.value) * 9.80665;
    this.kilonewton = this.newton / 1000;
    this.gramForce = parseFloat(event.target.value) * 1000;
    this.funtForce = parseFloat(event.target.value) * 2.20462262;
    this.ounceForce = parseFloat(event.target.value) * 35.27396195;
    this.poundal = parseFloat(event.target.value) * 70.93164;
    this.dyne = parseFloat(event.target.value) * 980665;

    if (event.target.value === '') {
      this.kilonewton = 0;
      this.newton = 0;
      this.gramForce = 0;
      this.funtForce = 0;
      this.ounceForce = 0;
      this.poundal = 0;
      this.dyne = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilonewton = 0;
        this.newton = 0;
        this.kilogramForce = '';
        this.gramForce = 0;
        this.funtForce = 0;
        this.ounceForce = 0;
        this.poundal = 0;
        this.dyne = 0;
      }
    }
  }

  changeGramForce(event) {
    this.newton = parseFloat(event.target.value) * 9806.65;
    this.kilonewton = this.newton / 1000;
    this.kilogramForce = parseFloat(event.target.value) / 1000;
    this.funtForce = parseFloat(event.target.value) * 2204.62262;
    this.ounceForce = parseFloat(event.target.value) * 35273.96195;
    this.poundal = parseFloat(event.target.value) * 70931.64;
    this.dyne = parseFloat(event.target.value) * 980665000;

    if (event.target.value === '') {
      this.kilonewton = 0;
      this.newton = 0;
      this.kilogramForce = 0;
      this.funtForce = 0;
      this.ounceForce = 0;
      this.poundal = 0;
      this.dyne = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilonewton = 0;
        this.newton = 0;
        this.kilogramForce = 0;
        this.gramForce = '';
        this.funtForce = 0;
        this.ounceForce = 0;
        this.poundal = 0;
        this.dyne = 0;
      }
    }
  }

  changeFuntForce(event) {
    this.newton = parseFloat(event.target.value) / 0.22480894;
    this.kilonewton = this.newton / 1000;
    this.gramForce = this.newton * 101.9716213;
    this.kilogramForce = this.gramForce / 1000;
    this.ounceForce = parseFloat(event.target.value) * 16;
    this.poundal = this.newton * 7.23301385;
    this.dyne = this.newton * 100000;

    if (event.target.value === '') {
      this.kilonewton = 0;
      this.newton = 0;
      this.kilogramForce = 0;
      this.gramForce = 0;
      this.ounceForce = 0;
      this.poundal = 0;
      this.dyne = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilonewton = 0;
        this.newton = 0;
        this.kilogramForce = 0;
        this.gramForce = 0;
        this.funtForce = '';
        this.ounceForce = 0;
        this.poundal = 0;
        this.dyne = 0;
      }
    }
  }

  changeOunceForce(event) {
    this.newton = parseFloat(event.target.value) / 3.59694309;
    this.kilonewton = this.newton / 1000;
    this.gramForce = this.newton * 101.9716213;
    this.kilogramForce = this.gramForce / 1000;
    this.funtForce = parseFloat(event.target.value) / 16;
    this.poundal = parseFloat(event.target.value) * 2.0125;
    this.dyne = this.newton * 100000;

    if (event.target.value === '') {
      this.kilonewton = 0;
      this.newton = 0;
      this.kilogramForce = 0;
      this.gramForce = 0;
      this.funtForce = 0;
      this.poundal = 0;
      this.dyne = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilonewton = 0;
        this.newton = 0;
        this.kilogramForce = 0;
        this.gramForce = 0;
        this.funtForce = 0;
        this.ounceForce = '';
        this.poundal = 0;
        this.dyne = 0;
      }
    }
  }

  changePoundal(event) {
    this.newton = parseFloat(event.target.value) / 7.23301385;
    this.kilonewton = this.newton / 1000;
    this.kilogramForce = parseFloat(event.target.value) / 70.93164;
    this.gramForce = this.kilogramForce * 1000;
    this.funtForce = parseFloat(event.target.value) / 32.17405;
    this.ounceForce = parseFloat(event.target.value) / 2.0125;
    this.dyne = parseFloat(event.target.value) * 13825.49544;

    if (event.target.value === '') {
      this.kilonewton = 0;
      this.newton = 0;
      this.kilogramForce = 0;
      this.gramForce = 0;
      this.funtForce = 0;
      this.ounceForce = 0;
      this.dyne = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilonewton = 0;
        this.newton = 0;
        this.kilogramForce = 0;
        this.gramForce = 0;
        this.funtForce = 0;
        this.ounceForce = 0;
        this.poundal = '';
        this.dyne = 0;
      }
    }
  }

  changeDyne(event) {
    this.kilonewton = parseFloat(event.target.value) / 100000000;
    this.newton = parseFloat(event.target.value) / 100000;
    this.kilogramForce = parseFloat(event.target.value) / 980665;
    this.gramForce = this.kilogramForce * 1000;
    this.funtForce = this.newton * 0.22480894;
    this.ounceForce = this.newton * 3.59694309;
    this.poundal = parseFloat(event.target.value) / 13825.49544;

    if (event.target.value === '') {
      this.kilonewton = 0;
      this.newton = 0;
      this.kilogramForce = 0;
      this.gramForce = 0;
      this.funtForce = 0;
      this.ounceForce = 0;
      this.poundal = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilonewton = 0;
        this.newton = 0;
        this.kilogramForce = 0;
        this.gramForce = 0;
        this.funtForce = 0;
        this.ounceForce = 0;
        this.poundal = 0;
        this.dyne = '';
      }
    }
  }
}
