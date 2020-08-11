import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConverterService } from 'src/app/services/converter.service';

@Component({
  selector: 'app-byte-unit',
  templateUrl: './byte-unit.component.html',
  styleUrls: ['./byte-unit.component.css']
})
export class ByteUnitComponent {
  byte = null;
  kilobyte = null;
  megabyte = null;
  gigabyte = null;
  terabyte = null;
  petabyte = null;
  kibibyte = null;
  mebibyte = null;
  gibibyte = null;
  tebibyte = null;
  pebibyte = null;
  changefromBit = false;

  // @Input()
  // bit;

  @Output()
  value = new EventEmitter();

  constructor(private converterService: ConverterService) {}

  changeBit(result): void {
    this.byte = result;
    this.changefromBit = true;
    this.changeByte(this.byte);
  }

  changeByte(event): void {
    if (this.changefromBit === false) {
      this.byte = event.target.value;
    }

    this.kilobyte = parseFloat(this.byte) / Math.pow(1000, 1);
    this.megabyte = parseFloat(this.byte) / Math.pow(1000, 2);
    this.gigabyte = parseFloat(this.byte) / Math.pow(1000, 3);
    this.terabyte = parseFloat(this.byte) / Math.pow(1000, 4);
    this.petabyte = parseFloat(this.byte) / Math.pow(1000, 5);
    this.kibibyte = parseFloat(this.byte) / Math.pow(1024, 1);
    this.mebibyte = parseFloat(this.byte) / Math.pow(1024, 2);
    this.gibibyte = parseFloat(this.byte) / Math.pow(1024, 3);
    this.tebibyte = parseFloat(this.byte) / Math.pow(1024, 4);
    this.pebibyte = parseFloat(this.byte) / Math.pow(1024, 5);

    if (this.byte === '') {
      this.kilobyte = 0;
      this.megabyte = 0;
      this.gigabyte = 0;
      this.terabyte = 0;
      this.petabyte = 0;
      this.kibibyte = 0;
      this.mebibyte = 0;
      this.gibibyte = 0;
      this.tebibyte = 0;
      this.pebibyte = 0;
      this.value.emit(0);
    } else {
      this.value.emit(parseFloat(this.byte));
    }
    this.changefromBit = true;
  }

  changeKilobyte(event): void {
    this.byte = parseFloat(event.target.value) * Math.pow(1000, 1);
    this.megabyte = parseFloat(event.target.value) / Math.pow(1000, 1);
    this.gigabyte = parseFloat(event.target.value) / Math.pow(1000, 2);
    this.terabyte = parseFloat(event.target.value) / Math.pow(1000, 3);
    this.petabyte = parseFloat(event.target.value) / Math.pow(1000, 4);
    this.kibibyte = parseFloat(event.target.value) * 0.9765625;
    this.mebibyte = this.megabyte * 0.95367432;
    this.gibibyte = this.gigabyte * 0.93132257;
    this.tebibyte = this.terabyte * 0.9094947;
    this.pebibyte = this.petabyte * 0.88817842;

    if (event.target.value === '') {
      this.byte = 0;
      this.megabyte = 0;
      this.gigabyte = 0;
      this.terabyte = 0;
      this.petabyte = 0;
      this.kibibyte = 0;
      this.mebibyte = 0;
      this.gibibyte = 0;
      this.tebibyte = 0;
      this.pebibyte = 0;
    }

    this.value.emit(this.byte);
  }

  changeMegabyte(event): void {
    this.byte = parseFloat(event.target.value) * Math.pow(1000, 2);
    this.kilobyte = parseFloat(event.target.value) * Math.pow(1000, 1);
    this.gigabyte = parseFloat(event.target.value) / Math.pow(1000, 1);
    this.terabyte = parseFloat(event.target.value) / Math.pow(1000, 2);
    this.petabyte = parseFloat(event.target.value) / Math.pow(1000, 3);
    this.kibibyte = this.kilobyte * 0.9765625;
    this.mebibyte = parseFloat(event.target.value) * 0.95367432;
    this.gibibyte = this.gigabyte * 0.93132257;
    this.tebibyte = this.terabyte * 0.9094947;
    this.pebibyte = this.petabyte * 0.88817842;

    if (event.target.value === '') {
      this.byte = 0;
      this.kilobyte = 0;
      this.gigabyte = 0;
      this.terabyte = 0;
      this.petabyte = 0;
      this.kibibyte = 0;
      this.mebibyte = 0;
      this.gibibyte = 0;
      this.tebibyte = 0;
      this.pebibyte = 0;
    }

    this.value.emit(this.byte);
  }

  changeGigabyte(event): void {
    this.byte = parseFloat(event.target.value) * Math.pow(1000, 3);
    this.kilobyte = parseFloat(event.target.value) * Math.pow(1000, 2);
    this.megabyte = parseFloat(event.target.value) * Math.pow(1000, 1);
    this.terabyte = parseFloat(event.target.value) / Math.pow(1000, 1);
    this.petabyte = parseFloat(event.target.value) / Math.pow(1000, 2);
    this.kibibyte = this.kilobyte * 0.9765625;
    this.mebibyte =  this.megabyte * 0.95367432;
    this.gibibyte = parseFloat(event.target.value) * 0.93132257;
    this.tebibyte = this.terabyte * 0.9094947;
    this.pebibyte = this.petabyte * 0.88817842;

    if (event.target.value === '') {
      this.byte = 0;
      this.kilobyte = 0;
      this.megabyte = 0;
      this.terabyte = 0;
      this.petabyte = 0;
      this.kibibyte = 0;
      this.mebibyte = 0;
      this.gibibyte = 0;
      this.tebibyte = 0;
      this.pebibyte = 0;
    }

    this.value.emit(this.byte);
  }

  changeTerabyte(event): void {
    this.byte = parseFloat(event.target.value) * Math.pow(1000, 4);
    this.kilobyte = parseFloat(event.target.value) * Math.pow(1000, 3);
    this.megabyte = parseFloat(event.target.value) * Math.pow(1000, 2);
    this.gigabyte = parseFloat(event.target.value) * Math.pow(1000, 1);
    this.petabyte = parseFloat(event.target.value) / Math.pow(1000, 1);
    this.kibibyte = this.kilobyte * 0.9765625;
    this.mebibyte = this.megabyte * 0.95367432;
    this.gibibyte = this.gigabyte * 0.93132257;
    this.tebibyte = parseFloat(event.target.value) * 0.9094947;
    this.pebibyte = this.petabyte * 0.88817842;

    if (event.target.value === '') {
      this.byte = 0;
      this.kilobyte = 0;
      this.megabyte = 0;
      this.gigabyte = 0;
      this.petabyte = 0;
      this.kibibyte = 0;
      this.mebibyte = 0;
      this.gibibyte = 0;
      this.tebibyte = 0;
      this.pebibyte = 0;
    }

    this.value.emit(this.byte);
  }

  changePetabyte(event): void {
    this.byte = parseFloat(event.target.value) * Math.pow(1000, 5);
    this.kilobyte = parseFloat(event.target.value) * Math.pow(1000, 4);
    this.megabyte = parseFloat(event.target.value) * Math.pow(1000, 3);
    this.gigabyte = parseFloat(event.target.value) * Math.pow(1000, 2);
    this.terabyte = parseFloat(event.target.value) * Math.pow(1000, 1);
    this.kibibyte = this.kilobyte * 0.9765625;
    this.mebibyte = this.megabyte * 0.95367432;
    this.gibibyte = this.gigabyte * 0.93132257;
    this.tebibyte = this.terabyte * 0.9094947;
    this.pebibyte = parseFloat(event.target.value) * 0.88817842;

    if (event.target.value === '') {
      this.byte = 0;
      this.kilobyte = 0;
      this.megabyte = 0;
      this.gigabyte = 0;
      this.terabyte = 0;
      this.kibibyte = 0;
      this.mebibyte = 0;
      this.gibibyte = 0;
      this.tebibyte = 0;
      this.pebibyte = 0;
    }

    this.value.emit(this.byte);
  }

  changeKibibyte(event): void {
    this.byte = parseFloat(event.target.value) * Math.pow(1024, 1);
    this.mebibyte = parseFloat(event.target.value) / Math.pow(1024, 1);
    this.gibibyte = parseFloat(event.target.value) / Math.pow(1024, 2);
    this.tebibyte = parseFloat(event.target.value) / Math.pow(1024, 3);
    this.pebibyte = parseFloat(event.target.value) / Math.pow(1024, 4);
    this.kilobyte = parseFloat(event.target.value) / 0.9765625;
    this.megabyte = this.mebibyte / 0.95367432;
    this.gigabyte = this.gibibyte / 0.93132257;
    this.terabyte = this.tebibyte / 0.9094947;
    this.petabyte = this.pebibyte / 0.88817842;

    if (event.target.value === '') {
      this.byte = 0;
      this.mebibyte = 0;
      this.gibibyte = 0;
      this.tebibyte = 0;
      this.pebibyte = 0;
      this.kilobyte = 0;
      this.megabyte = 0;
      this.gigabyte = 0;
      this.terabyte = 0;
      this.petabyte = 0;
    }

    this.value.emit(this.byte);
  }

  changeMebibyte(event): void {
    this.byte = parseFloat(event.target.value) * Math.pow(1024, 2);
    this.kibibyte = parseFloat(event.target.value) * Math.pow(1024, 1);
    this.gibibyte = parseFloat(event.target.value) / Math.pow(1024, 1);
    this.tebibyte = parseFloat(event.target.value) / Math.pow(1024, 2);
    this.pebibyte = parseFloat(event.target.value) / Math.pow(1024, 3);
    this.kilobyte = this.kibibyte / 0.9765625;
    this.megabyte = parseFloat(event.target.value) / 0.95367432;
    this.gigabyte = this.gibibyte / 0.93132257;
    this.terabyte = this.tebibyte / 0.9094947;
    this.petabyte = this.pebibyte / 0.88817842;

    if (event.target.value === '') {
      this.byte = 0;
      this.kibibyte = 0;
      this.gibibyte = 0;
      this.tebibyte = 0;
      this.pebibyte = 0;
      this.kilobyte = 0;
      this.megabyte = 0;
      this.gigabyte = 0;
      this.terabyte = 0;
      this.petabyte = 0;
    }

    this.value.emit(this.byte);
  }

  changeGibibyte(event): void {
    this.byte = parseFloat(event.target.value) * Math.pow(1024, 3);
    this.kibibyte = parseFloat(event.target.value) * Math.pow(1024, 2);
    this.mebibyte = parseFloat(event.target.value) * Math.pow(1024, 1);
    this.tebibyte = parseFloat(event.target.value) / Math.pow(1024, 1);
    this.pebibyte = parseFloat(event.target.value) / Math.pow(1024, 2);
    this.kilobyte = this.kibibyte / 0.9765625;
    this.megabyte = this.mebibyte / 0.95367432;
    this.gigabyte = parseFloat(event.target.value) / 0.93132257;
    this.terabyte = this.tebibyte / 0.9094947;
    this.petabyte = this.pebibyte / 0.88817842;

    if (event.target.value === '') {
      this.byte = 0;
      this.kibibyte = 0;
      this.mebibyte = 0;
      this.tebibyte = 0;
      this.pebibyte = 0;
      this.kilobyte = 0;
      this.megabyte = 0;
      this.gigabyte = 0;
      this.terabyte = 0;
      this.petabyte = 0;
    }

    this.value.emit(this.byte);
  }

  changeTebibyte(event): void {
    this.byte = parseFloat(event.target.value) * Math.pow(1024, 4);
    this.kibibyte = parseFloat(event.target.value) * Math.pow(1024, 3);
    this.mebibyte = parseFloat(event.target.value) * Math.pow(1024, 2);
    this.gibibyte = parseFloat(event.target.value) * Math.pow(1024, 1);
    this.pebibyte = parseFloat(event.target.value) / Math.pow(1024, 1);
    this.kilobyte = this.kibibyte / 0.9765625;
    this.megabyte = this.mebibyte / 0.95367432;
    this.gigabyte = this.gibibyte / 0.93132257;
    this.terabyte = parseFloat(event.target.value) / 0.9094947;
    this.petabyte = this.pebibyte / 0.88817842;

    if (event.target.value === '') {
      this.byte = 0;
      this.kibibyte = 0;
      this.mebibyte = 0;
      this.gibibyte = 0;
      this.pebibyte = 0;
      this.kilobyte = 0;
      this.megabyte = 0;
      this.gigabyte = 0;
      this.terabyte = 0;
      this.petabyte = 0;
    }

    this.value.emit(this.byte);
  }

  changePebibyte(event): void {
    this.byte = parseFloat(event.target.value) * Math.pow(1024, 5);
    this.kibibyte = parseFloat(event.target.value) * Math.pow(1024, 4);
    this.mebibyte = parseFloat(event.target.value) * Math.pow(1024, 3);
    this.gibibyte = parseFloat(event.target.value) * Math.pow(1024, 2);
    this.tebibyte = parseFloat(event.target.value) * Math.pow(1024, 1);
    this.kilobyte = this.kibibyte / 0.9765625;
    this.megabyte = this.mebibyte / 0.95367432;
    this.gigabyte = this.gibibyte / 0.93132257;
    this.terabyte = this.tebibyte / 0.9094947;
    this.petabyte = parseFloat(event.target.value) / 0.88817842;

    if (event.target.value === '') {
      this.byte = 0;
      this.kibibyte = 0;
      this.mebibyte = 0;
      this.gibibyte = 0;
      this.tebibyte = 0;
      this.kilobyte = 0;
      this.megabyte = 0;
      this.gigabyte = 0;
      this.terabyte = 0;
      this.petabyte = 0;
    }

    this.value.emit(this.byte);
  }
}
