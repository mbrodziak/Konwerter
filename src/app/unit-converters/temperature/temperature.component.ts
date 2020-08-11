import { Component } from '@angular/core';
import { ConverterService } from 'src/app/services/converter.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {

  celsius = null;
  fahrenheit = null;
  kelvin = null;
  rankine = null;
  round = 2;

  constructor(private converterService: ConverterService) { }

  changeCelcius(event): void {
    this.round = parseFloat((document.getElementById('round') as HTMLInputElement).value);
    this.fahrenheit = this.converterService.round((9 / 5) * parseFloat(event.target.value) + 32 , this.round );
    this.kelvin = this.converterService.round(parseFloat(event.target.value) + 273.15, this.round );
    this.rankine = this.converterService.round((parseFloat(event.target.value) + 273.15) * 1.8, this.round );

    if (event.target.value === '') {
      this.fahrenheit = 0;
      this.kelvin = 0;
      this.rankine = 0;
    }
  }

   changeFahrenheit(event): void {
    this.round = parseFloat((document.getElementById('round') as HTMLInputElement).value);
    this.celsius = this.converterService.round((parseFloat(event.target.value) - 32) * (5 / 9), this.round );
    this.kelvin = this.converterService.round((parseFloat(event.target.value) + 459.67) * (5 / 9), this.round );
    this.rankine = this.converterService.round(parseFloat(event.target.value) + 459.67, this.round );

    if (event.target.value  === '') {
      this.celsius = 0;
      this.kelvin = 0;
      this.rankine = 0;
    }
  }

  changeKelvin(event): void {
    this.round = parseFloat((document.getElementById('round') as HTMLInputElement).value);
    this.celsius = this.converterService.round(parseFloat(event.target.value) - 273.15, this.round );
    this.fahrenheit = this.converterService.round((parseFloat(event.target.value) * 1.8) - 459.67, this.round );
    this.rankine = this.converterService.round((parseFloat(event.target.value) - 273.15) * 1.8 + 491.67, this.round );

    if (event.target.value === '') {
      this.celsius = 0;
      this.fahrenheit = 0;
      this.rankine = 0;
    }
  }

  changeRankine(event): void {
    this.round = parseFloat((document.getElementById('round') as HTMLInputElement).value);
    this.celsius = this.converterService.round((parseFloat(event.target.value) / 1.8) - 273.15, this.round );
    this.fahrenheit = this.converterService.round(parseFloat(event.target.value) - 459.67, this.round );
    this.kelvin = this.converterService.round(((parseFloat(event.target.value) - 491.67) / 1.8) + 273.15, this.round );

    if (event.target.value === '') {
      this.celsius = 0;
      this.fahrenheit = 0;
      this.kelvin = 0;
    }
  }
}
