import { Component } from '@angular/core';

@Component({
  selector: 'app-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.css']
})
export class MassComponent {

  gram = null;
  hectogram = null;
  kilogram = null;
  decagram = null;
  megagram = null;
  gigagram = null;
  teragram = null;
  decigram = null;
  centigram = null;
  milligram = null;
  nanogram = null;
  results: Array<any>;

  constructor() { }

  changeTeragrams(event): void {
    this.gigagram = parseFloat(event.target.value) * 1000;
    this.megagram = parseFloat(event.target.value) * 1000000;
    this.kilogram = parseFloat(event.target.value) * 1000000000;
    this.hectogram = parseFloat(event.target.value) * 10000000000;
    this.decagram = parseFloat(event.target.value) * 100000000000;
    this.gram = parseFloat(event.target.value) * 1000000000000;
    this.decigram = parseFloat(event.target.value) * 10000000000000;
    this.centigram = parseFloat(event.target.value) * 100000000000000;
    this.milligram = parseFloat(event.target.value) * 1000000000000000;
    this.nanogram = parseFloat(event.target.value) * 1000000000000000000000;

    if (event.target.value === '') {
      this.gigagram = 0;
      this.megagram = 0;
      this.kilogram = 0;
      this.hectogram = 0;
      this.decagram = 0;
      this.gram = 0;
      this.decigram = 0;
      this.centigram = 0;
      this.milligram = 0;
      this.nanogram = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.teragram = '';
        this.gigagram = 0;
        this.megagram = 0;
        this.kilogram = 0;
        this.hectogram = 0;
        this.decagram = 0;
        this.gram = 0;
        this.decigram = 0;
        this.centigram = 0;
        this.milligram = 0;
        this.nanogram = 0;
      }
    }
  }

  changeGigagrams(event): void {
    this.teragram = parseFloat(event.target.value) / 1000;
    this.megagram = parseFloat(event.target.value) * 1000;
    this.kilogram = parseFloat(event.target.value) * 1000000;
    this.hectogram = parseFloat(event.target.value) * 10000000;
    this.decagram = parseFloat(event.target.value) * 100000000;
    this.gram = parseFloat(event.target.value) * 1000000000;
    this.decigram = parseFloat(event.target.value) * 10000000000;
    this.centigram = parseFloat(event.target.value) * 100000000000;
    this.milligram = parseFloat(event.target.value) * 1000000000000;
    this.nanogram = parseFloat(event.target.value) * 1000000000000000000;

    if (event.target.value === '') {
      this.teragram = 0;
      this.megagram = 0;
      this.kilogram = 0;
      this.hectogram = 0;
      this.decagram = 0;
      this.gram = 0;
      this.decigram = 0;
      this.centigram = 0;
      this.milligram = 0;
      this.nanogram = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.teragram = 0;
        this.gigagram = '';
        this.megagram = 0;
        this.kilogram = 0;
        this.hectogram = 0;
        this.decagram = 0;
        this.gram = 0;
        this.decigram = 0;
        this.centigram = 0;
        this.milligram = 0;
        this.nanogram = 0;
      }
    }
  }

  changeMegagrams(event): void {
    this.teragram = parseFloat(event.target.value) / 1000000;
    this.gigagram = parseFloat(event.target.value) / 1000;
    this.kilogram = parseFloat(event.target.value) * 1000;
    this.hectogram = parseFloat(event.target.value) * 10000;
    this.decagram = parseFloat(event.target.value) * 100000;
    this.gram = parseFloat(event.target.value) * 1000000;
    this.decigram = parseFloat(event.target.value) * 10000000;
    this.centigram = parseFloat(event.target.value) * 100000000;
    this.milligram = parseFloat(event.target.value) * 1000000000;
    this.nanogram = parseFloat(event.target.value) * 1000000000000000;

    if (event.target.value === '') {
      this.teragram = 0;
      this.gigagram = 0;
      this.kilogram = 0;
      this.hectogram = 0;
      this.decagram = 0;
      this.gram = 0;
      this.decigram = 0;
      this.centigram = 0;
      this.milligram = 0;
      this.nanogram = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.teragram = 0;
        this.gigagram = 0;
        this.megagram = '';
        this.kilogram = 0;
        this.hectogram = 0;
        this.decagram = 0;
        this.gram = 0;
        this.decigram = 0;
        this.centigram = 0;
        this.milligram = 0;
        this.nanogram = 0;
      }
    }
  }

  changeKilograms(event): void {
    this.teragram = parseFloat(event.target.value) / 1000000000;
    this.gigagram = parseFloat(event.target.value) / 1000000;
    this.megagram = parseFloat(event.target.value) / 1000;
    this.hectogram = parseFloat(event.target.value) * 10;
    this.decagram = parseFloat(event.target.value) * 100;
    this.gram = parseFloat(event.target.value) * 1000;
    this.decigram = parseFloat(event.target.value) * 10000;
    this.centigram = parseFloat(event.target.value) * 100000;
    this.milligram = parseFloat(event.target.value) * 1000000;
    this.nanogram = parseFloat(event.target.value) * 1000000000000;

    if (event.target.value === '') {
      this.teragram = 0;
      this.gigagram = 0;
      this.megagram = 0;
      this.hectogram = 0;
      this.decagram = 0;
      this.gram = 0;
      this.decigram = 0;
      this.centigram = 0;
      this.milligram = 0;
      this.nanogram = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.teragram = 0;
        this.gigagram = 0;
        this.megagram = 0;
        this.kilogram = '';
        this.hectogram = 0;
        this.decagram = 0;
        this.gram = 0;
        this.decigram = 0;
        this.centigram = 0;
        this.milligram = 0;
        this.nanogram = 0;
      }
    }
  }

  changeHectograms(event): void {
    this.teragram = parseFloat(event.target.value) / 10000000000;
    this.gigagram = parseFloat(event.target.value) / 10000000;
    this.megagram = parseFloat(event.target.value) / 10000;
    this.kilogram = parseFloat(event.target.value) / 10;
    this.decagram = parseFloat(event.target.value) * 10;
    this.gram = parseFloat(event.target.value) * 100;
    this.decigram = parseFloat(event.target.value) * 1000;
    this.centigram = parseFloat(event.target.value) * 10000;
    this.milligram = parseFloat(event.target.value) * 100000;
    this.nanogram = parseFloat(event.target.value) * 100000000000;

    if (event.target.value === '') {
      this.teragram = 0;
      this.gigagram = 0;
      this.megagram = 0;
      this.kilogram = 0;
      this.decagram = 0;
      this.gram = 0;
      this.decigram = 0;
      this.centigram = 0;
      this.milligram = 0;
      this.nanogram = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.teragram = 0;
        this.gigagram = 0;
        this.megagram = 0;
        this.kilogram = 0;
        this.hectogram = '';
        this.decagram = 0;
        this.gram = 0;
        this.decigram = 0;
        this.centigram = 0;
        this.milligram = 0;
        this.nanogram = 0;
      }
    }
  }

  changeDecagrams(event): void {
    this.teragram = parseFloat(event.target.value) / 100000000000;
    this.gigagram = parseFloat(event.target.value) / 100000000;
    this.megagram = parseFloat(event.target.value) / 100000;
    this.kilogram = parseFloat(event.target.value) / 100;
    this.hectogram = parseFloat(event.target.value) / 10;
    this.gram = parseFloat(event.target.value) * 10;
    this.decigram = parseFloat(event.target.value) * 100;
    this.centigram = parseFloat(event.target.value) * 1000;
    this.milligram = parseFloat(event.target.value) * 10000;
    this.nanogram = parseFloat(event.target.value) * 10000000000;

    if (event.target.value === '') {
      this.teragram = 0;
      this.gigagram = 0;
      this.megagram = 0;
      this.kilogram = 0;
      this.hectogram = 0;
      this.decagram = 0;
      this.gram = 0;
      this.decigram = 0;
      this.centigram = 0;
      this.milligram = 0;
      this.nanogram = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.teragram = 0;
        this.gigagram = 0;
        this.megagram = 0;
        this.kilogram = 0;
        this.hectogram = 0;
        this.decagram = '';
        this.gram = 0;
        this.decigram = 0;
        this.centigram = 0;
        this.milligram = 0;
        this.nanogram = 0;
      }
    }
  }

  changeGrams(event): void {
    this.teragram = parseFloat(event.target.value) / 1000000000000;
    this.gigagram = parseFloat(event.target.value) / 1000000000;
    this.megagram = parseFloat(event.target.value) / 1000000;
    this.kilogram = parseFloat(event.target.value) / 1000;
    this.hectogram = parseFloat(event.target.value) / 100;
    this.decagram = parseFloat(event.target.value) / 10;
    this.decigram = parseFloat(event.target.value) * 10;
    this.centigram = parseFloat(event.target.value) * 100;
    this.milligram = parseFloat(event.target.value) * 1000;
    this.nanogram = parseFloat(event.target.value) * 1000000000;

    if (event.target.value === '') {
      this.teragram = 0;
      this.gigagram = 0;
      this.megagram = 0;
      this.kilogram = 0;
      this.hectogram = 0;
      this.decagram = 0;
      this.decigram = 0;
      this.centigram = 0;
      this.milligram = 0;
      this.nanogram = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.teragram = 0;
        this.gigagram = 0;
        this.megagram = 0;
        this.kilogram = 0;
        this.hectogram = 0;
        this.decagram = 0;
        this.gram = '';
        this.decigram = 0;
        this.centigram = 0;
        this.milligram = 0;
        this.nanogram = 0;
      }
    }
  }

  changeDecigrams(event): void {
    this.teragram = parseFloat(event.target.value) / 10000000000000;
    this.gigagram = parseFloat(event.target.value) / 10000000000;
    this.megagram = parseFloat(event.target.value) / 10000000;
    this.kilogram = parseFloat(event.target.value) / 10000;
    this.hectogram = parseFloat(event.target.value) / 1000;
    this.decagram = parseFloat(event.target.value) / 100;
    this.gram = parseFloat(event.target.value) / 10;
    this.centigram = parseFloat(event.target.value) * 10;
    this.milligram = parseFloat(event.target.value) * 100;
    this.nanogram = parseFloat(event.target.value) * 100000000;

    if (event.target.value === '') {
      this.teragram = 0;
      this.gigagram = 0;
      this.megagram = 0;
      this.kilogram = 0;
      this.hectogram = 0;
      this.decagram = 0;
      this.gram = 0;
      this.centigram = 0;
      this.milligram = 0;
      this.nanogram = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.teragram = 0;
        this.gigagram = 0;
        this.megagram = 0;
        this.kilogram = 0;
        this.hectogram = 0;
        this.decagram = 0;
        this.gram = 0;
        this.decigram = '';
        this.centigram = 0;
        this.milligram = 0;
        this.nanogram = 0;
      }
    }
  }

  changeCentigrams(event): void {
    this.teragram = parseFloat(event.target.value) / 100000000000000;
    this.gigagram = parseFloat(event.target.value) / 100000000000;
    this.megagram = parseFloat(event.target.value) / 100000000;
    this.kilogram = parseFloat(event.target.value) / 100000;
    this.hectogram = parseFloat(event.target.value) / 10000;
    this.decagram = parseFloat(event.target.value) / 1000;
    this.gram = parseFloat(event.target.value) / 100;
    this.decigram = parseFloat(event.target.value) / 10;
    this.milligram = parseFloat(event.target.value) * 10;
    this.nanogram = parseFloat(event.target.value) * 10000000;

    if (event.target.value === '') {
      this.teragram = 0;
      this.gigagram = 0;
      this.megagram = 0;
      this.kilogram = 0;
      this.hectogram = 0;
      this.decagram = 0;
      this.gram = 0;
      this.decigram = 0;
      this.milligram = 0;
      this.nanogram = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.teragram = 0;
        this.gigagram = 0;
        this.megagram = 0;
        this.kilogram = 0;
        this.hectogram = 0;
        this.decagram = 0;
        this.gram = 0;
        this.decigram = 0;
        this.centigram = '';
        this.milligram = 0;
        this.nanogram = 0;
      }
    }
  }

  changeMilligrams(event): void {
    this.teragram = parseFloat(event.target.value) / 1000000000000000;
    this.gigagram = parseFloat(event.target.value) / 1000000000000;
    this.megagram = parseFloat(event.target.value) / 1000000000;
    this.kilogram = parseFloat(event.target.value) / 1000000;
    this.hectogram = parseFloat(event.target.value) / 100000;
    this.decagram = parseFloat(event.target.value) / 10000;
    this.gram = parseFloat(event.target.value) / 1000;
    this.decigram = parseFloat(event.target.value) / 100;
    this.centigram = parseFloat(event.target.value) / 10;
    this.nanogram = parseFloat(event.target.value) * 1000000;

    if (this.milligram === '') {
      this.teragram = 0;
      this.gigagram = 0;
      this.megagram = 0;
      this.kilogram = 0;
      this.hectogram = 0;
      this.decagram = 0;
      this.gram = 0;
      this.decigram = 0;
      this.centigram = 0;
      this.nanogram = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.teragram = 0;
        this.gigagram = 0;
        this.megagram = 0;
        this.kilogram = 0;
        this.hectogram = 0;
        this.decagram = 0;
        this.gram = 0;
        this.decigram = 0;
        this.centigram = 0;
        this.milligram = '';
        this.nanogram = 0;
      }
    }
  }


  changeNanograms(event): void {
    this.teragram = parseFloat(event.target.value) / 1000000000000000000000;
    this.gigagram = parseFloat(event.target.value) / 1000000000000000000;
    this.megagram = parseFloat(event.target.value) / 1000000000000000;
    this.kilogram = parseFloat(event.target.value) / 1000000000000;
    this.hectogram = parseFloat(event.target.value) / 100000000000;
    this.decagram = parseFloat(event.target.value) / 10000000000;
    this.gram = parseFloat(event.target.value) / 1000000000;
    this.decigram = parseFloat(event.target.value) / 100000000;
    this.centigram = parseFloat(event.target.value) / 10000000;
    this.milligram = parseFloat(event.target.value) / 1000000;

    if (event.target.value === '') {
      this.teragram = 0;
      this.gigagram = 0;
      this.megagram = 0;
      this.kilogram = 0;
      this.hectogram = 0;
      this.decagram = 0;
      this.gram = 0;
      this.decigram = 0;
      this.centigram = 0;
      this.milligram = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.teragram = 0;
        this.gigagram = 0;
        this.megagram = 0;
        this.kilogram = 0;
        this.hectogram = 0;
        this.decagram = 0;
        this.gram = 0;
        this.decigram = 0;
        this.centigram = 0;
        this.milligram = 0;
        this.nanogram = '';
      }
    }
  }

}
