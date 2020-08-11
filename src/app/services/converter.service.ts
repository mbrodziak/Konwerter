import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor() { }

  factor: number;
  private result = new BehaviorSubject<number>(0);

  // setValue(value): void {
  //   this.result = value;
  //   console.log(this.result);
  // }

  // getValue(): number {
  //   return this.result;
  // }

  round(n: number, k: number): number {
    this.factor = Math.pow(10, k + 1);
    n = Math.round(Math.round(n * this.factor) / 10);
    return n / (this.factor / 10);
  }
}
