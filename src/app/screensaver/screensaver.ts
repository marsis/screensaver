import { Component, ElementRef, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-screensaver',
  templateUrl: './screensaver.html',
  styleUrls: ['./screensaver.scss']
})
export class ScreensaverComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    new p5(p => {
      let x = 100;
      let y = 100;

      let xspeed = 4;
      let yspeed = 4;
      let img;
      let r;
      let g;
      let b;

      img = p.loadImage('./assets/dvd_logo.png');

      const pickColor = () => {
        r = p.random(100, 256);
        g = p.random(100, 256);
        b = p.random(100, 256);
      };

      p.setup = () => {
        p.createCanvas(screenWidth, screenHeight);
        x = p.random(screenWidth);
        y = p.random(screenHeight);
        pickColor();
      };

      p.draw = () => {
        p.background(0);
        p.tint(r, g, b);
        p.image(img, x, y);

        x = x + xspeed;
        y = y + yspeed;

        if (x + img.width >= screenWidth) {
          xspeed = -xspeed;
          x = screenWidth - img.width;
          pickColor();
        } else if (x <= 0) {
          xspeed = -xspeed;
          x = 0;
          pickColor();
        }

        if (y + img.height >= screenHeight) {
          yspeed = -yspeed;
          y = screenHeight - img.height;
          pickColor();
        } else if (y <= 0) {
          yspeed = -yspeed;
          y = 0;
          pickColor();
        }
      };
    }, this.el.nativeElement);
  }
}
