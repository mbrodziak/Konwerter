import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LengthComponent } from './unit-converters/length/length.component';
import { MassComponent } from './unit-converters/mass/mass.component';
import { TemperatureComponent } from './unit-converters/temperature/temperature.component';
import { TimeComponent } from './unit-converters/time/time.component';
import { NumberSystemsComponent } from './unit-converters/number-systems/number-systems.component';
import { DigitalMemoryComponent } from './unit-converters/digital-memory/digital-memory.component';
import { DataTransferRateComponent } from './unit-converters/data-transfer-rate/data-transfer-rate.component';
import { UnitConvertersComponent } from './unit-converters/unit-converters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ByteUnitComponent } from './unit-converters/digital-memory/byte-unit/byte-unit.component';
import { BitUnitComponent } from './unit-converters/digital-memory/bit-unit/bit-unit.component';
import { PowerComponent } from './unit-converters/power/power.component';
import { EnergyComponent } from './unit-converters/energy/energy.component';
import { ForceComponent } from './unit-converters/force/force.component';
import { PressureComponent } from './unit-converters/pressure/pressure.component';
import { SpeedComponent } from './unit-converters/speed/speed.component';
import { AccelerationComponent } from './unit-converters/acceleration/acceleration.component';
import { RomanNumeralsComponent } from './unit-converters/roman-numerals/roman-numerals.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

const config = {
  apiKey: 'AIzaSyBeIKtcux7Q8fBU4ia8VTxjvvKaPwVCWg0',
  authDomain: 'converter-41a2a.firebaseapp.com',
  databaseURL: 'https://converter-41a2a.firebaseio.com',
  projectId: 'converter-41a2a',
  storageBucket: '',
  messagingSenderId: '1066549575754',
  appId: '1:1066549575754:web:0b7046835cd3096fc0a6b3',
  measurementId: 'G-JHP4493G1S'
};

@NgModule({
  declarations: [
    AppComponent,
    LengthComponent,
    MassComponent,
    TemperatureComponent,
    TimeComponent,
    NumberSystemsComponent,
    DigitalMemoryComponent,
    DataTransferRateComponent,
    UnitConvertersComponent,
    ByteUnitComponent,
    BitUnitComponent,
    PowerComponent,
    EnergyComponent,
    ForceComponent,
    PressureComponent,
    SpeedComponent,
    AccelerationComponent,
    RomanNumeralsComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
