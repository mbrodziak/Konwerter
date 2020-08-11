import { Component } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent {

  year = null;
  leapYear = null;
  month = null;
  week = null;
  day = null;
  hour = null;
  minute = null;
  second = null;
  millisecond = null;

  constructor() { }

  changeYears(event): void {
    this.leapYear = parseFloat(event.target.value) / 1.002739726027;
    this.month = parseFloat(event.target.value) * 12;
    this.week = parseFloat(event.target.value) * 52.14285714286;
    this.day = parseFloat(event.target.value) * 365;
    this.hour = parseFloat(event.target.value) * 8760;
    this.minute = parseFloat(event.target.value) * 525600;
    this.second = parseFloat(event.target.value) * 31536000;
    this.millisecond = parseFloat(event.target.value) * 31536000000;

    if (event.target.value === '') {
      this.leapYear = 0;
      this.month = 0;
      this.week = 0;
      this.day = 0;
      this.hour = 0;
      this.minute = 0;
      this.second = 0;
      this.millisecond = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.year = '';
        this.leapYear = 0;
        this.month = 0;
        this.week = 0;
        this.day = 0;
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.millisecond = 0;
      }
    }

    this.NotANumber(this.leapYear);
  }

  changeLeapYears(event): void {
    this.year = parseFloat(event.target.value) * 1.002739726027;
    this.month = parseFloat(event.target.value) * 12.03287671233;
    this.week = parseFloat(event.target.value) * 52.28571428571;
    this.day = parseFloat(event.target.value) * 366;
    this.hour = parseFloat(event.target.value) * 8784;
    this.minute = parseFloat(event.target.value) * 527040;
    this.second = parseFloat(event.target.value) * 31622400;
    this.millisecond = parseFloat(event.target.value) * 31622400000;

    if (event.target.value === '') {
      this.year = 0;
      this.month = 0;
      this.week = 0;
      this.day = 0;
      this.hour = 0;
      this.minute = 0;
      this.second = 0;
      this.millisecond = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.year = 0;
        this.leapYear = '';
        this.month = 0;
        this.week = 0;
        this.day = 0;
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.millisecond = 0;
      }
    }

    this.NotANumber(this.year);
  }

  changeMonths(event): void {
    this.year = parseFloat(event.target.value) / 12;
    this.leapYear = parseFloat(event.target.value) / 12.03287671233;
    this.week = parseFloat(event.target.value) * 4.345238095238;
    this.day = parseFloat(event.target.value) * 30.41666666667;
    this.hour = parseFloat(event.target.value) * 730;
    this.minute = parseFloat(event.target.value) * 43800;
    this.second = parseFloat(event.target.value) * 2628000;
    this.millisecond = parseFloat(event.target.value) * 2628000000;

    if (event.target.value === '') {
      this.year = 0;
      this.leapYear = 0;
      this.week = 0;
      this.day = 0;
      this.hour = 0;
      this.minute = 0;
      this.second = 0;
      this.millisecond = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.year = 0;
        this.leapYear = 0;
        this.month = '';
        this.week = 0;
        this.day = 0;
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.millisecond = 0;
      }
    }

    this.NotANumber(this.year);
  }

  changeWeeks(event): void {
    this.year = parseFloat(event.target.value) / 52.14285714286;
    this.leapYear = parseFloat(event.target.value) / 52.28571428571;
    this.month = parseFloat(event.target.value) / 4.345238095238;
    this.day = parseFloat(event.target.value) * 7;
    this.hour = parseFloat(event.target.value) * 168;
    this.minute = parseFloat(event.target.value) * 10080;
    this.second = parseFloat(event.target.value) * 604800;
    this.millisecond = parseFloat(event.target.value) * 604800000;

    if (event.target.value === '') {
      this.year = 0;
      this.leapYear = 0;
      this.month = 0;
      this.day = 0;
      this.hour = 0;
      this.minute = 0;
      this.second = 0;
      this.millisecond = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.year = 0;
        this.leapYear = 0;
        this.month = 0;
        this.week = '';
        this.day = 0;
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.millisecond = 0;
      }
    }

    this.NotANumber(this.year);
  }

  changeDays(event): void {
    this.year = parseFloat(event.target.value) / 365;
    this.leapYear = parseFloat(event.target.value) / 366;
    this.month = parseFloat(event.target.value) / 30.41666666667;
    this.week = parseFloat(event.target.value) / 7;
    this.hour = parseFloat(event.target.value) * 24;
    this.minute = parseFloat(event.target.value) * 1440;
    this.second = parseFloat(event.target.value) * 86400;
    this.millisecond = parseFloat(event.target.value) * 86400000;

    if (event.target.value === '') {
      this.year = 0;
      this.leapYear = 0;
      this.month = 0;
      this.week = 0;
      this.hour = 0;
      this.minute = 0;
      this.second = 0;
      this.millisecond = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.year = 0;
        this.leapYear = 0;
        this.month = 0;
        this.week = 0;
        this.day = '';
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.millisecond = 0;
      }
    }

    this.NotANumber(this.year);
  }

  changeHours(event): void {
    this.year = parseFloat(event.target.value) / 8760;
    this.leapYear = parseFloat(event.target.value) / 8784;
    this.month = parseFloat(event.target.value) / 730;
    this.week = parseFloat(event.target.value) / 168;
    this.day = parseFloat(event.target.value) / 24;
    this.minute = parseFloat(event.target.value) * 60;
    this.second = parseFloat(event.target.value) * 3600;
    this.millisecond = parseFloat(event.target.value) * 3600000;

    if (event.target.value === '') {
      this.year = 0;
      this.leapYear = 0;
      this.month = 0;
      this.week = 0;
      this.day = 0;
      this.minute = 0;
      this.second = 0;
      this.millisecond = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.year = 0;
        this.leapYear = 0;
        this.month = 0;
        this.week = 0;
        this.day = 0;
        this.hour = '';
        this.minute = 0;
        this.second = 0;
        this.millisecond = 0;
      }
    }

    this.NotANumber(this.year);
  }

  changeMinutes(event): void {
    this.year = parseFloat(event.target.value) / 525600;
    this.leapYear = parseFloat(event.target.value) / 527040;
    this.month = parseFloat(event.target.value) / 43800;
    this.week = parseFloat(event.target.value) / 10080;
    this.day = parseFloat(event.target.value) / 1440;
    this.hour = parseFloat(event.target.value) / 60;
    this.second = parseFloat(event.target.value) * 60;
    this.millisecond = parseFloat(event.target.value) * 60000;

    if (event.target.value === '') {
      this.year = 0;
      this.leapYear = 0;
      this.month = 0;
      this.week = 0;
      this.day = 0;
      this.hour = 0;
      this.second = 0;
      this.millisecond = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.year = 0;
        this.leapYear = 0;
        this.month = 0;
        this.week = 0;
        this.day = 0;
        this.hour = 0;
        this.minute = '';
        this.second = 0;
        this.millisecond = 0;
      }
    }

    this.NotANumber(this.year);
  }

  changeSeconds(event): void {
    this.year = parseFloat(event.target.value) / 31536000;
    this.leapYear = parseFloat(event.target.value) / 31622400;
    this.month = parseFloat(event.target.value) / 2628000;
    this.week = parseFloat(event.target.value) / 604800;
    this.day = parseFloat(event.target.value) / 86400;
    this.hour = parseFloat(event.target.value) / 3600;
    this.minute = parseFloat(event.target.value) / 60;
    this.millisecond = parseFloat(event.target.value) * 1000;

    if (event.target.value === '') {
      this.year = 0;
      this.leapYear = 0;
      this.month = 0;
      this.week = 0;
      this.day = 0;
      this.hour = 0;
      this.minute = 0;
      this.millisecond = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.year = 0;
        this.leapYear = 0;
        this.month = 0;
        this.week = 0;
        this.day = 0;
        this.hour = 0;
        this.minute = 0;
        this.second = '';
        this.millisecond = 0;
      }
    }

    this.NotANumber(this.year);
  }

  changeMilliseconds(event): void {
    this.year = parseFloat(event.target.value) / 31536000000;
    this.leapYear = parseFloat(event.target.value) / 31622400000;
    this.month = parseFloat(event.target.value) / 2628000000;
    this.week = parseFloat(event.target.value) /  604800000;
    this.day = parseFloat(event.target.value) / 86400000;
    this.hour = parseFloat(event.target.value) / 3600000;
    this.minute = parseFloat(event.target.value) / 60000;
    this.second = parseFloat(event.target.value) / 1000;

    if (event.target.value === '') {
      this.year = 0;
      this.leapYear = 0;
      this.month = 0;
      this.week = 0;
      this.day = 0;
      this.hour = 0;
      this.minute = 0;
      this.second = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.year = '';
        this.leapYear = '';
        this.month = '';
        this.week = '';
        this.day = '';
        this.hour = '';
        this.minute = '';
        this.second = '';
        this.millisecond = '';
      }
    }

    this.NotANumber(this.year);
  }

  NotANumber(input: any) {
    if (isNaN(input)) {
      this.year = '';
      this.leapYear = '';
      this.month = '';
      this.week = '';
      this.day = '';
      this.hour = '';
      this.minute = '';
      this.second = '';
      this.millisecond = null;
    }
  }
}
