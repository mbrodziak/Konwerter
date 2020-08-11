import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitConvertersComponent } from './unit-converters/unit-converters.component';
import { LengthComponent } from './unit-converters/length/length.component';
import { TemperatureComponent } from './unit-converters/temperature/temperature.component';
import { MassComponent } from './unit-converters/mass/mass.component';
import { DataTransferRateComponent } from './unit-converters/data-transfer-rate/data-transfer-rate.component';
import { TimeComponent } from './unit-converters/time/time.component';
import { DigitalMemoryComponent } from './unit-converters/digital-memory/digital-memory.component';
import { NumberSystemsComponent } from './unit-converters/number-systems/number-systems.component';
import { ByteUnitComponent } from './unit-converters/digital-memory/byte-unit/byte-unit.component';
import { BitUnitComponent } from './unit-converters/digital-memory/bit-unit/bit-unit.component';
import { AccelerationComponent } from './unit-converters/acceleration/acceleration.component';
import { EnergyComponent } from './unit-converters/energy/energy.component';
import { ForceComponent } from './unit-converters/force/force.component';
import { PowerComponent } from './unit-converters/power/power.component';
import { PressureComponent } from './unit-converters/pressure/pressure.component';
import { RomanNumeralsComponent } from './unit-converters/roman-numerals/roman-numerals.component';
import { SpeedComponent } from './unit-converters/speed/speed.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';




const appRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/unit-converters',
  //   pathMatch: 'full'
  // },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'unit-converters',
    component: UnitConvertersComponent
  },
  {
    path: 'acceleration',
    component: AccelerationComponent
  },
  {
    path: 'data-transfer-rate',
    component: DataTransferRateComponent
  },
  {
    path: 'digital-memory',
    component: DigitalMemoryComponent,
  },
  {
    path: 'byte-unit',
    component: ByteUnitComponent
  },
  {
    path: 'bit-unit',
    component: BitUnitComponent
  },
  {
    path: 'energy',
    component: EnergyComponent
  },
  {
    path: 'force',
    component: ForceComponent
  },
  {
    path: 'length',
    component: LengthComponent
  },
  {
    path: 'mass',
    component: MassComponent
  },
  {
    path: 'number-systems',
    component: NumberSystemsComponent
  },
  {
    path: 'power',
    component: PowerComponent
  },
  {
    path: 'pressure',
    component: PressureComponent
  },
  {
    path: 'roman-numerals',
    component: RomanNumeralsComponent
  },
  {
    path: 'speed',
    component: SpeedComponent
  },
  {
    path: 'temperature',
    component: TemperatureComponent
  },
  {
    path: 'time',
    component: TimeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
