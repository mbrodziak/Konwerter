import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConverterService } from 'src/app/services/converter.service';

@Component({
  selector: 'app-bit-unit',
  templateUrl: './bit-unit.component.html',
  styleUrls: ['./bit-unit.component.css']
})
export class BitUnitComponent {

  @Input()
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
  changefromByte = false;

  @Output()
  value = new EventEmitter();

  constructor(private converterService: ConverterService) {}

  changeByte(result): void {
    this.bit = result;
    this.changefromByte = true;
    this.changeBit(this.bit);
  }

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
      this.value.emit(0);
    } else {
      this.value.emit(parseFloat(this.bit));
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
    this.value.emit(this.bit);
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
    this.value.emit(this.bit);
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
    this.value.emit(this.bit);
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
    this.value.emit(this.bit);
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
    this.value.emit(this.bit);
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
    this.value.emit(this.bit);
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
    this.value.emit(this.bit);
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
    this.value.emit(this.bit);
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
    this.value.emit(this.bit);
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
    this.value.emit(this.bit);
  }

}
