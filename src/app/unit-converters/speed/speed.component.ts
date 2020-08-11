import { Component } from '@angular/core';

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.css']
})
export class SpeedComponent {

  constructor() { }

  kilometterSecond = null;
  metterSecond = null;
  kilometterHour = null;
  mileSecond = null;
  mileHour = null;
  footSecond = null;
  speedLight = null;
  mach = null;
  knot = null;

  changeKilometterSecond(event) {
    this.metterSecond = parseFloat(event.target.value) * 1000;
    this.kilometterHour = this.metterSecond * 3.6;
    this.mileSecond = this.metterSecond / 1609.344;
    this.mileHour = this.metterSecond * 2.236936292054;
    this.footSecond = this.metterSecond * 3.280839895013;
    this.speedLight = this.metterSecond / 299792457.99999994;
    this.mach = this.metterSecond / 295.0464000003;
    this.knot = this.metterSecond * 1.943844492441;

    if (event.target.value === '') {
      this.metterSecond = 0;
      this.kilometterHour = 0;
      this.mileSecond = 0;
      this.mileHour = 0;
      this.footSecond = 0;
      this.speedLight = 0;
      this.mach = 0;
      this.knot = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilometterSecond = '';
        this.metterSecond = 0;
        this.kilometterHour = 0;
        this.mileSecond = 0;
        this.mileHour = 0;
        this.footSecond = 0;
        this.speedLight = 0;
        this.mach = 0;
        this.knot = 0;
      }
    }
  }

  changeMetterSecond(event) {
    this.kilometterSecond = parseFloat(event.target.value) / 1000;
    this.kilometterHour = parseFloat(event.target.value) * 3.6;
    this.mileSecond = parseFloat(event.target.value) / 1609.344;
    this.mileHour = parseFloat(event.target.value) * 2.236936292054;
    this.footSecond = parseFloat(event.target.value) * 3.280839895013;
    this.speedLight = parseFloat(event.target.value) / 299792457.99999994;
    this.mach = parseFloat(event.target.value) / 295.0464000003;
    this.knot = parseFloat(event.target.value) * 1.943844492441;

    if (event.target.value === '') {
      this.kilometterSecond = 0;
      this.kilometterHour = 0;
      this.mileSecond = 0;
      this.mileHour = 0;
      this.footSecond = 0;
      this.speedLight = 0;
      this.mach = 0;
      this.knot = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilometterSecond = 0;
        this.metterSecond = '';
        this.kilometterHour = 0;
        this.mileSecond = 0;
        this.mileHour = 0;
        this.footSecond = 0;
        this.speedLight = 0;
        this.mach = 0;
        this.knot = 0;
      }
    }
  }

  changeKilometterHour(event) {
    this.metterSecond = parseFloat(event.target.value) / 3.6;
    this.kilometterSecond = this.metterSecond / 1000;
    this.mileSecond = this.metterSecond / 1609.344;
    this.mileHour = this.metterSecond * 2.236936292054;
    this.footSecond = this.metterSecond * 3.280839895013;
    this.speedLight = this.metterSecond / 299792457.99999994;
    this.mach = this.metterSecond / 295.0464000003;
    this.knot = this.metterSecond * 1.943844492441;

    if (event.target.value === '') {
      this.kilometterSecond = 0;
      this.metterSecond = 0;
      this.mileSecond = 0;
      this.mileHour = 0;
      this.footSecond = 0;
      this.speedLight = 0;
      this.mach = 0;
      this.knot = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilometterSecond = 0;
        this.metterSecond = 0;
        this.kilometterHour = '';
        this.mileSecond = 0;
        this.mileHour = 0;
        this.footSecond = 0;
        this.speedLight = 0;
        this.mach = 0;
        this.knot = 0;
      }
    }
  }

  changeMileSecond(event) {
    this.metterSecond = parseFloat(event.target.value) * 1609.344;
    this.kilometterSecond = this.metterSecond / 1000;
    this.kilometterHour = this.metterSecond * 3.6;
    this.mileHour = this.metterSecond * 2.236936292054;
    this.footSecond = this.metterSecond * 3.280839895013;
    this.speedLight = this.metterSecond / 299792457.99999994;
    this.mach = this.metterSecond / 295.0464000003;
    this.knot = this.metterSecond * 1.943844492441;

    if (event.target.value === '') {
      this.kilometterSecond = 0;
      this.metterSecond = 0;
      this.kilometterHour = 0;
      this.mileHour = 0;
      this.footSecond = 0;
      this.speedLight = 0;
      this.mach = 0;
      this.knot = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilometterSecond = 0;
        this.metterSecond = 0;
        this.kilometterHour = 0;
        this.mileSecond = '';
        this.mileHour = 0;
        this.footSecond = 0;
        this.speedLight = 0;
        this.mach = 0;
        this.knot = 0;
      }
    }
  }

  changeMileHour(event) {
    this.metterSecond = parseFloat(event.target.value) / 2.236936292054;
    this.kilometterSecond = this.metterSecond / 1000;
    this.kilometterHour = this.metterSecond * 3.6;
    this.mileSecond = this.metterSecond / 1609.344;
    this.footSecond = this.metterSecond * 3.280839895013;
    this.speedLight = this.metterSecond / 299792457.99999994;
    this.mach = this.metterSecond / 295.0464000003;
    this.knot = this.metterSecond * 1.943844492441;

    if (event.target.value === '') {
      this.kilometterSecond = 0;
      this.metterSecond = 0;
      this.kilometterHour = 0;
      this.mileSecond = 0;
      this.footSecond = 0;
      this.speedLight = 0;
      this.mach = 0;
      this.knot = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilometterSecond = 0;
        this.metterSecond = 0;
        this.kilometterHour = 0;
        this.mileSecond = 0;
        this.mileHour = '';
        this.footSecond = 0;
        this.speedLight = 0;
        this.mach = 0;
        this.knot = 0;
      }
    }
  }

  changeFootSecond(event) {
    this.metterSecond = parseFloat(event.target.value) / 3.280839895013;
    this.kilometterSecond = this.metterSecond / 1000;
    this.kilometterHour = this.metterSecond * 3.6;
    this.mileSecond = this.metterSecond / 1609.344;
    this.mileHour = this.metterSecond * 2.236936292054;
    this.speedLight = this.metterSecond / 299792457.99999994;
    this.mach = this.metterSecond / 295.0464000003;
    this.knot = this.metterSecond * 1.943844492441;

    if (event.target.value === '') {
      this.kilometterSecond = 0;
      this.metterSecond = 0;
      this.kilometterHour = 0;
      this.mileSecond = 0;
      this.mileHour = 0;
      this.speedLight = 0;
      this.mach = 0;
      this.knot = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilometterSecond = 0;
        this.metterSecond = 0;
        this.kilometterHour = 0;
        this.mileSecond = 0;
        this.mileHour = 0;
        this.footSecond = '';
        this.speedLight = 0;
        this.mach = 0;
        this.knot = 0;
      }
    }
  }

  changeSpeedLight(event) {
    this.metterSecond = parseFloat(event.target.value) * 299792457.99999994;
    this.kilometterSecond = this.metterSecond / 1000;
    this.kilometterHour = this.metterSecond * 3.6;
    this.mileSecond = this.metterSecond / 1609.344;
    this.mileHour = this.metterSecond * 2.236936292054;
    this.footSecond = this.metterSecond * 3.280839895013;
    this.mach = this.metterSecond / 295.0464000003;
    this.knot = this.metterSecond * 1.943844492441;

    if (event.target.value === '') {
      this.kilometterSecond = 0;
      this.metterSecond = 0;
      this.kilometterHour = 0;
      this.mileSecond = 0;
      this.mileHour = 0;
      this.footSecond = 0;
      this.mach = 0;
      this.knot = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilometterSecond = 0;
        this.metterSecond = 0;
        this.kilometterHour = 0;
        this.mileSecond = 0;
        this.mileHour = 0;
        this.footSecond = 0;
        this.speedLight = '';
        this.mach = 0;
        this.knot = 0;
      }
    }
  }

  changeMach(event) {
    this.metterSecond = parseFloat(event.target.value) * 295.0464000003;
    this.kilometterSecond = this.metterSecond / 1000;
    this.kilometterHour = this.metterSecond * 3.6;
    this.mileSecond = this.metterSecond / 1609.344;
    this.mileHour = this.metterSecond * 2.236936292054;
    this.footSecond = this.metterSecond * 3.280839895013;
    this.speedLight = this.metterSecond / 299792457.99999994;
    this.knot = this.metterSecond * 1.943844492441;

    if (event.target.value === '') {
      this.kilometterSecond = 0;
      this.metterSecond = 0;
      this.kilometterHour = 0;
      this.mileSecond = 0;
      this.mileHour = 0;
      this.footSecond = 0;
      this.speedLight = 0;
      this.knot = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilometterSecond = 0;
        this.metterSecond = 0;
        this.kilometterHour = 0;
        this.mileSecond = 0;
        this.mileHour = 0;
        this.footSecond = 0;
        this.speedLight = 0;
        this.mach = '';
        this.knot = 0;
      }
    }
  }

  changeKnot(event) {
    this.metterSecond = parseFloat(event.target.value) / 1.943844492441;
    this.kilometterSecond = this.metterSecond / 1000;
    this.kilometterHour = this.metterSecond * 3.6;
    this.mileSecond = this.metterSecond / 1609.344;
    this.mileHour = this.metterSecond * 2.236936292054;
    this.footSecond = this.metterSecond * 3.280839895013;
    this.speedLight = this.metterSecond / 299792457.99999994;
    this.mach = this.metterSecond / 295.0464000003;

    if (event.target.value === '') {
      this.kilometterSecond = 0;
      this.metterSecond = 0;
      this.kilometterHour = 0;
      this.mileSecond = 0;
      this.mileHour = 0;
      this.footSecond = 0;
      this.speedLight = 0;
      this.mach = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.kilometterSecond = 0;
        this.metterSecond = 0;
        this.kilometterHour = 0;
        this.mileSecond = 0;
        this.mileHour = 0;
        this.footSecond = 0;
        this.speedLight = 0;
        this.mach = 0;
        this.knot = '';
      }
    }
  }
}
