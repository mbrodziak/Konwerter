import { Component, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import { ByteUnitComponent } from './byte-unit/byte-unit.component';
import { BitUnitComponent } from './bit-unit/bit-unit.component';
import { ConverterService } from 'src/app/services/converter.service';

@Component({
  selector: 'app-digital-memory',
  templateUrl: './digital-memory.component.html',
  styleUrls: ['./digital-memory.component.css']
})
export class DigitalMemoryComponent {

  // @ViewChild('byteUnit', {static: false})
  // byteComponent: ByteUnitComponent;

  // @ViewChild('bit', {static: false})
  // bitComponent: BitUnitComponent;

  // result = null;
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

  bit = null;
  kilobit = null;
  megabit = null;
  gigabit = null;
  terabit = null;
  petabit = null;
  kibibit = null;
  mebibit = null;
  gibibit = null;
  tebibit = null;
  pebibit = null;
  changefromBit = false;
  changefromByte = false;

  // bit;

  // @Output()
  // value = new EventEmitter();

  constructor(private converterService: ConverterService) {}

  // changeBit(result): void {
  //   this.byte = result / 8;
  //   this.changefromBit = true;
  //   this.changeByte(this.byte);
  // }

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
    this.bit = parseFloat(this.byte) * 8;

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
      this.bit = 0;
      // this.value.emit(0);
    }
    // else {
      // this.value.emit(parseFloat(this.byte));
    // }

    // this.byteToBit(this.byte);
    for (let i = 0; i < this.byte.length; i++) {
      if ((this.byte[i] === '-' || this.byte[i] === '+') && this.byte[i - 1] !== 'e') {
        this.byte = '';
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
      }
    }
    if (this.changefromBit === false) {
      this.changefromByte = true;
      this.changeBit(this.bit);
    }
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

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.byte = 0;
        this.kilobyte = '';
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
    }
    // this.value.emit(this.byte);
    this.bit = this.byte * 8;
    this.changefromByte = true;
    this.changeBit(this.bit);
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
    this.bit = this.byte * 8;

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
      this.bit = 0;
    }

    // this.value.emit(this.byte);
    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.byte = 0;
        this.kilobyte = 0;
        this.megabyte = '';
        this.gigabyte = 0;
        this.terabyte = 0;
        this.petabyte = 0;
        this.kibibyte = 0;
        this.mebibyte = 0;
        this.gibibyte = 0;
        this.tebibyte = 0;
        this.pebibyte = 0;
      }
    }


    this.changefromByte = true;
    this.changeBit(this.bit);
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

    // this.value.emit(this.byte);
    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.byte = 0;
        this.kilobyte = 0;
        this.megabyte = 0;
        this.gigabyte = '';
        this.terabyte = 0;
        this.petabyte = 0;
        this.kibibyte = 0;
        this.mebibyte = 0;
        this.gibibyte = 0;
        this.tebibyte = 0;
        this.pebibyte = 0;
      }
    }

    this.bit = this.byte * 8;
    this.changefromByte = true;
    this.changeBit(this.bit);
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

    // this.value.emit(this.byte);
    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.byte = 0;
        this.kilobyte = 0;
        this.megabyte = 0;
        this.gigabyte = 0;
        this.terabyte = '';
        this.petabyte = 0;
        this.kibibyte = 0;
        this.mebibyte = 0;
        this.gibibyte = 0;
        this.tebibyte = 0;
        this.pebibyte = 0;
      }
    }

    this.bit = this.byte * 8;
    this.changefromByte = true;
    this.changeBit(this.bit);
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

    // this.value.emit(this.byte);

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.byte = 0;
        this.kilobyte = 0;
        this.megabyte = 0;
        this.gigabyte = 0;
        this.terabyte = 0;
        this.petabyte = '';
        this.kibibyte = 0;
        this.mebibyte = 0;
        this.gibibyte = 0;
        this.tebibyte = 0;
        this.pebibyte = 0;
      }
    }

    this.bit = this.byte * 8;
    this.changefromByte = true;
    this.changeBit(this.bit);
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

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.byte = 0;
        this.kilobyte = 0;
        this.megabyte = 0;
        this.gigabyte = 0;
        this.terabyte = 0;
        this.petabyte = 0;
        this.kibibyte = '';
        this.mebibyte = 0;
        this.gibibyte = 0;
        this.tebibyte = 0;
        this.pebibyte = 0;
      }
    }

    //// this.value.emit(this.byte);
    this.bit = this.byte * 8;
    this.changefromByte = true;
    this.changeBit(this.bit);
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

    // this.value.emit(this.byte);

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.byte = 0;
        this.kilobyte = 0;
        this.megabyte = 0;
        this.gigabyte = 0;
        this.terabyte = 0;
        this.petabyte = 0;
        this.kibibyte = 0;
        this.mebibyte = '';
        this.gibibyte = 0;
        this.tebibyte = 0;
        this.pebibyte = 0;
      }
    }

    this.bit = this.byte * 8;
    this.changefromByte = true;
    this.changeBit(this.bit);
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

    // this.value.emit(this.byte);

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.byte = 0;
        this.kilobyte = 0;
        this.megabyte = 0;
        this.gigabyte = 0;
        this.terabyte = 0;
        this.petabyte = 0;
        this.kibibyte = 0;
        this.mebibyte = 0;
        this.gibibyte = '';
        this.tebibyte = 0;
        this.pebibyte = 0;
      }
    }

    this.bit = this.byte * 8;
    this.changefromByte = true;
    this.changeBit(this.bit);
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

    // this.value.emit(this.byte);

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.byte = 0;
        this.kilobyte = 0;
        this.megabyte = 0;
        this.gigabyte = 0;
        this.terabyte = 0;
        this.petabyte = 0;
        this.kibibyte = 0;
        this.mebibyte = 0;
        this.gibibyte = 0;
        this.tebibyte = '';
        this.pebibyte = 0;
      }
    }

    this.bit = this.byte * 8;
    this.changefromByte = true;
    this.changeBit(this.bit);
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

    // this.value.emit(this.byte);

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.byte = 0;
        this.kilobyte = 0;
        this.megabyte = 0;
        this.gigabyte = 0;
        this.terabyte = 0;
        this.petabyte = 0;
        this.kibibyte = 0;
        this.mebibyte = 0;
        this.gibibyte = 0;
        this.tebibyte = 0;
        this.pebibyte = '';
      }
    }

    this.bit = this.byte * 8;
    this.changefromByte = true;
    this.changeBit(this.bit);
  }

  // byteToBit(value: number): void {
  //   this.bit = value * 8;
  //   // this.result = this.byteComponent.byte * 8;
  //   this.bitComponent.changeByte(this.bit);
  // }

  // bitToByte(value: number): void {
  //   this.result = value / 8;
  //   this.byteComponent.changeBit(this.result);
  // }

  changeBit(event): void {
    if (this.changefromByte === false) {
      this.bit = event.target.value;
    }
    this.kilobit = parseFloat(this.bit) / Math.pow(1000, 1);
    this.megabit = parseFloat(this.bit) / Math.pow(1000, 2);
    this.gigabit = parseFloat(this.bit) / Math.pow(1000, 3);
    this.terabit = parseFloat(this.bit) / Math.pow(1000, 4);
    this.petabit = parseFloat(this.bit) / Math.pow(1000, 5);
    this.kibibit = parseFloat(this.bit) / Math.pow(1024, 1);
    this.mebibit = parseFloat(this.bit) / Math.pow(1024, 2);
    this.gibibit = parseFloat(this.bit) / Math.pow(1024, 3);
    this.tebibit = parseFloat(this.bit) / Math.pow(1024, 4);
    this.pebibit = parseFloat(this.bit) / Math.pow(1024, 5);
    this.byte = this.bit / 8;

    if (this.bit === '') {
      this.kilobit = 0;
      this.megabit = 0;
      this.gigabit = 0;
      this.terabit = 0;
      this.petabit = 0;
      this.kibibit = 0;
      this.mebibit = 0;
      this.gibibit = 0;
      this.tebibit = 0;
      this.pebibit = 0;
      this.byte = 0;
    }

    for (let i = 0; i < this.bit.length; i++) {
      if ((this.bit[i] === '-' || this.bit[i] === '+') && this.bit[i - 1] !== 'e') {
        this.bit = '';
        this.kilobit = 0;
        this.megabit = 0;
        this.gigabit = 0;
        this.terabit = 0;
        this.petabit = 0;
        this.kibibit = 0;
        this.mebibit = 0;
        this.gibibit = 0;
        this.tebibit = 0;
        this.pebibit = 0;
      }
    }
    if (this.changefromByte === false) {
      this.changefromBit = true;
      this.changeByte(this.byte);
    }
  }

  changeKilobit(event): void {
    this.bit = parseFloat(event.target.value) * Math.pow(1000, 1);
    this.megabit = parseFloat(event.target.value) / Math.pow(1000, 1);
    this.gigabit = parseFloat(event.target.value) / Math.pow(1000, 2);
    this.terabit = parseFloat(event.target.value) / Math.pow(1000, 3);
    this.petabit = parseFloat(event.target.value) / Math.pow(1000, 4);
    this.kibibit = parseFloat(event.target.value) * 0.9765625;
    this.mebibit = this.megabit * 0.95367432;
    this.gibibit = this.gigabit * 0.93132257;
    this.tebibit = this.terabit * 0.9094947;
    this.pebibit = this.petabit * 0.88817842;

    if (event.target.value === '') {
      this.bit = 0;
      this.megabit = 0;
      this.gigabit = 0;
      this.terabit = 0;
      this.petabit = 0;
      this.kibibit = 0;
      this.mebibit = 0;
      this.gibibit = 0;
      this.tebibit = 0;
      this.pebibit = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.bit = 0;
        this.kilobit = '';
        this.megabit = 0;
        this.gigabit = 0;
        this.terabit = 0;
        this.petabit = 0;
        this.kibibit = 0;
        this.mebibit = 0;
        this.gibibit = 0;
        this.tebibit = 0;
        this.pebibit = 0;
      }
    }

    this.byte = this.bit / 8;
    this.changefromBit = true;
    this.changeByte(this.byte);
  }

  changeMegabit(event): void {
    this.bit = parseFloat(event.target.value) * Math.pow(1000, 2);
    this.kilobit = parseFloat(event.target.value) * Math.pow(1000, 1);
    this.gigabit = parseFloat(event.target.value) / Math.pow(1000, 1);
    this.terabit = parseFloat(event.target.value) / Math.pow(1000, 2);
    this.petabit = parseFloat(event.target.value) / Math.pow(1000, 3);
    this.kibibit = this.kilobit * 0.9765625;
    this.mebibit = parseFloat(event.target.value) * 0.95367432;
    this.gibibit = this.gigabit * 0.93132257;
    this.tebibit = this.terabit * 0.9094947;
    this.pebibit = this.petabit * 0.88817842;

    if (event.target.value === '') {
      this.bit = 0;
      this.kilobit = 0;
      this.gigabit = 0;
      this.terabit = 0;
      this.petabit = 0;
      this.kibibit = 0;
      this.mebibit = 0;
      this.gibibit = 0;
      this.tebibit = 0;
      this.pebibit = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.bit = 0;
        this.kilobit = 0;
        this.megabit = '';
        this.gigabit = 0;
        this.terabit = 0;
        this.petabit = 0;
        this.kibibit = 0;
        this.mebibit = 0;
        this.gibibit = 0;
        this.tebibit = 0;
        this.pebibit = 0;
      }
    }

    this.byte = this.bit / 8;
    this.changefromBit = true;
    this.changeByte(this.byte);
  }

  changeGigabit(event): void {
    this.bit = parseFloat(event.target.value) * Math.pow(1000, 3);
    this.kilobit = parseFloat(event.target.value) * Math.pow(1000, 2);
    this.megabit = parseFloat(event.target.value) * Math.pow(1000, 1);
    this.terabit = parseFloat(event.target.value) / Math.pow(1000, 1);
    this.petabit = parseFloat(event.target.value) / Math.pow(1000, 2);
    this.kibibit = this.kilobit * 0.9765625;
    this.mebibit =  this.megabit * 0.95367432;
    this.gibibit = parseFloat(event.target.value) * 0.93132257;
    this.tebibit = this.terabit * 0.9094947;
    this.pebibit = this.petabit * 0.88817842;

    if (event.target.value === '') {
      this.bit = 0;
      this.kilobit = 0;
      this.megabit = 0;
      this.terabit = 0;
      this.petabit = 0;
      this.kibibit = 0;
      this.mebibit = 0;
      this.gibibit = 0;
      this.tebibit = 0;
      this.pebibit = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.bit = 0;
        this.kilobit = 0;
        this.megabit = 0;
        this.gigabit = '';
        this.terabit = 0;
        this.petabit = 0;
        this.kibibit = 0;
        this.mebibit = 0;
        this.gibibit = 0;
        this.tebibit = 0;
        this.pebibit = 0;
      }
    }

    this.byte = this.bit / 8;
    this.changefromBit = true;
    this.changeByte(this.byte);
  }

  changeTerabit(event): void {
    this.bit = parseFloat(event.target.value) * Math.pow(1000, 4);
    this.kilobit = parseFloat(event.target.value) * Math.pow(1000, 3);
    this.megabit = parseFloat(event.target.value) * Math.pow(1000, 2);
    this.gigabit = parseFloat(event.target.value) * Math.pow(1000, 1);
    this.petabit = parseFloat(event.target.value) / Math.pow(1000, 1);
    this.kibibit = this.kilobit * 0.9765625;
    this.mebibit = this.megabit * 0.95367432;
    this.gibibit = this.gigabit * 0.93132257;
    this.tebibit = parseFloat(event.target.value) * 0.9094947;
    this.pebibit = this.petabit * 0.88817842;

    if (event.target.value === '') {
      this.bit = 0;
      this.bit = 0;
      this.kilobit = 0;
      this.megabit = 0;
      this.gigabit = 0;
      this.petabit = 0;
      this.kibibit = 0;
      this.mebibit = 0;
      this.gibibit = 0;
      this.tebibit = 0;
      this.pebibit = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.bit = 0;
        this.kilobit = 0;
        this.megabit = 0;
        this.gigabit = 0;
        this.terabit = '';
        this.petabit = 0;
        this.kibibit = 0;
        this.mebibit = 0;
        this.gibibit = 0;
        this.tebibit = 0;
        this.pebibit = 0;
      }
    }

    this.byte = this.bit / 8;
    this.changefromBit = true;
    this.changeByte(this.byte);
  }

  changePetabit(event): void {
    this.bit = parseFloat(event.target.value) * Math.pow(1000, 5);
    this.kilobit = parseFloat(event.target.value) * Math.pow(1000, 4);
    this.megabit = parseFloat(event.target.value) * Math.pow(1000, 3);
    this.gigabit = parseFloat(event.target.value) * Math.pow(1000, 2);
    this.terabit = parseFloat(event.target.value) * Math.pow(1000, 1);
    this.kibibit = this.kilobit * 0.9765625;
    this.mebibit = this.megabit * 0.95367432;
    this.gibibit = this.gigabit * 0.93132257;
    this.tebibit = this.terabit * 0.9094947;
    this.pebibit = parseFloat(event.target.value) * 0.88817842;

    if (event.target.value === '') {
      this.bit = 0;
      this.bit = 0;
      this.kilobit = 0;
      this.megabit = 0;
      this.gigabit = 0;
      this.terabit = 0;
      this.kibibit = 0;
      this.mebibit = 0;
      this.gibibit = 0;
      this.tebibit = 0;
      this.pebibit = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.bit = 0;
        this.kilobit = 0;
        this.megabit = 0;
        this.gigabit = 0;
        this.terabit = 0;
        this.petabit = '';
        this.kibibit = 0;
        this.mebibit = 0;
        this.gibibit = 0;
        this.tebibit = 0;
        this.pebibit = 0;
      }
    }

    this.byte = this.bit / 8;
    this.changefromBit = true;
    this.changeByte(this.byte);
  }

  changeKibibit(event): void {
    this.bit = parseFloat(event.target.value) * Math.pow(1024, 1);
    this.mebibit = parseFloat(event.target.value) / Math.pow(1024, 1);
    this.gibibit = parseFloat(event.target.value) / Math.pow(1024, 2);
    this.tebibit = parseFloat(event.target.value) / Math.pow(1024, 3);
    this.pebibit = parseFloat(event.target.value) / Math.pow(1024, 4);
    this.kilobit = parseFloat(event.target.value) / 0.9765625;
    this.megabit = this.mebibit / 0.95367432;
    this.gigabit = this.gibibit / 0.93132257;
    this.terabit = this.tebibit / 0.9094947;
    this.petabit = this.pebibit / 0.88817842;

    if (event.target.value === '') {
      this.bit = 0;
      this.mebibit = 0;
      this.gibibit = 0;
      this.tebibit = 0;
      this.pebibit = 0;
      this.kilobit = 0;
      this.megabit = 0;
      this.gigabit = 0;
      this.terabit = 0;
      this.petabit = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.bit = 0;
        this.kilobit = 0;
        this.megabit = 0;
        this.gigabit = 0;
        this.terabit = 0;
        this.petabit = 0;
        this.kibibit = '';
        this.mebibit = 0;
        this.gibibit = 0;
        this.tebibit = 0;
        this.pebibit = 0;
      }
    }

    this.byte = this.bit / 8;
    this.changefromBit = true;
    this.changeByte(this.byte);
  }

  changeMebibit(event): void {
    this.bit = parseFloat(event.target.value) * Math.pow(1024, 2);
    this.kibibit = parseFloat(event.target.value) * Math.pow(1024, 1);
    this.gibibit = parseFloat(event.target.value) / Math.pow(1024, 1);
    this.tebibit = parseFloat(event.target.value) / Math.pow(1024, 2);
    this.pebibit = parseFloat(event.target.value) / Math.pow(1024, 3);
    this.kilobit = this.kibibit / 0.9765625;
    this.megabit = parseFloat(event.target.value) / 0.95367432;
    this.gigabit = this.gibibit / 0.93132257;
    this.terabit = this.tebibit / 0.9094947;
    this.petabit = this.pebibit / 0.88817842;

    if (event.target.value === '') {
      this.bit = 0;
      this.kibibit = 0;
      this.gibibit = 0;
      this.tebibit = 0;
      this.pebibit = 0;
      this.kilobit = 0;
      this.megabit = 0;
      this.gigabit = 0;
      this.terabit = 0;
      this.petabit = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.bit = 0;
        this.kilobit = 0;
        this.megabit = 0;
        this.gigabit = 0;
        this.terabit = 0;
        this.petabit = 0;
        this.kibibit = 0;
        this.mebibit = '';
        this.gibibit = 0;
        this.tebibit = 0;
        this.pebibit = 0;
      }
    }

    this.byte = this.bit / 8;
    this.changefromBit = true;
    this.changeByte(this.byte);
  }

  changeGibibit(event): void {
    this.bit = parseFloat(event.target.value) * Math.pow(1024, 3);
    this.kibibit = parseFloat(event.target.value) * Math.pow(1024, 2);
    this.mebibit = parseFloat(event.target.value) * Math.pow(1024, 1);
    this.tebibit = parseFloat(event.target.value) / Math.pow(1024, 1);
    this.pebibit = parseFloat(event.target.value) / Math.pow(1024, 2);
    this.kilobit = this.kibibit / 0.9765625;
    this.megabit = this.mebibit / 0.95367432;
    this.gigabit = parseFloat(event.target.value) / 0.93132257;
    this.terabit = this.tebibit / 0.9094947;
    this.petabit = this.pebibit / 0.88817842;

    if (event.target.value === '') {
      this.bit = 0;
      this.kibibit = 0;
      this.mebibit = 0;
      this.tebibit = 0;
      this.pebibit = 0;
      this.kilobit = 0;
      this.megabit = 0;
      this.gigabit = 0;
      this.terabit = 0;
      this.petabit = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.bit = 0;
        this.kilobit = 0;
        this.megabit = 0;
        this.gigabit = 0;
        this.terabit = 0;
        this.petabit = 0;
        this.kibibit = 0;
        this.mebibit = 0;
        this.gibibit = '';
        this.tebibit = 0;
        this.pebibit = 0;
      }
    }

    this.byte = this.bit / 8;
    this.changefromBit = true;
    this.changeByte(this.byte);
  }

  changeTebibit(event): void {
    this.bit = parseFloat(event.target.value) * Math.pow(1024, 4);
    this.kibibit = parseFloat(event.target.value) * Math.pow(1024, 3);
    this.mebibit = parseFloat(event.target.value) * Math.pow(1024, 2);
    this.gibibit = parseFloat(event.target.value) * Math.pow(1024, 1);
    this.pebibit = parseFloat(event.target.value) / Math.pow(1024, 1);
    this.kilobit = this.kibibit / 0.9765625;
    this.megabit = this.mebibit / 0.95367432;
    this.gigabit = this.gibibit / 0.93132257;
    this.terabit = parseFloat(event.target.value) / 0.9094947;
    this.petabit = this.pebibit / 0.88817842;

    if (event.target.value === '') {
      this.bit = 0;
      this.kibibit = 0;
      this.mebibit = 0;
      this.gibibit = 0;
      this.pebibit = 0;
      this.kilobit = 0;
      this.megabit = 0;
      this.gigabit = 0;
      this.terabit = 0;
      this.petabit = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.bit = 0;
        this.kilobit = 0;
        this.megabit = 0;
        this.gigabit = 0;
        this.terabit = 0;
        this.petabit = 0;
        this.kibibit = 0;
        this.mebibit = 0;
        this.gibibit = 0;
        this.tebibit = '';
        this.pebibit = 0;
      }
    }

    this.byte = this.bit / 8;
    this.changefromBit = true;
    this.changeByte(this.byte);
  }

  changePebibit(event): void {
    this.bit = parseFloat(event.target.value) * Math.pow(1024, 5);
    this.kibibit = parseFloat(event.target.value) * Math.pow(1024, 4);
    this.mebibit = parseFloat(event.target.value) * Math.pow(1024, 3);
    this.gibibit = parseFloat(event.target.value) * Math.pow(1024, 2);
    this.tebibit = parseFloat(event.target.value) * Math.pow(1024, 1);
    this.kilobit = this.kibibit / 0.9765625;
    this.megabit = this.mebibit / 0.95367432;
    this.gigabit = this.gibibit / 0.93132257;
    this.terabit = this.tebibit / 0.9094947;
    this.petabit = parseFloat(event.target.value) / 0.88817842;

    if (event.target.value === '') {
      this.bit = 0;
      this.kibibit = 0;
      this.mebibit = 0;
      this.gibibit = 0;
      this.tebibit = 0;
      this.kilobit = 0;
      this.megabit = 0;
      this.gigabit = 0;
      this.terabit = 0;
      this.petabit = 0;
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if ((event.target.value[i] === '-' || event.target.value[i] === '+') && event.target.value[i - 1] !== 'e') {
        this.bit = 0;
        this.kilobit = 0;
        this.megabit = 0;
        this.gigabit = 0;
        this.terabit = 0;
        this.petabit = 0;
        this.kibibit = 0;
        this.mebibit = 0;
        this.gibibit = 0;
        this.tebibit = 0;
        this.pebibit = '';
      }
    }

    this.byte = this.bit / 8;
    this.changefromBit = true;
    this.changeByte(this.byte);
  }
}
