import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScreensaverComponent } from 'src/app/screensaver/screensaver';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreensaverComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
