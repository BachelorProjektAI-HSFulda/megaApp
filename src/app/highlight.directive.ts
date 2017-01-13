import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import {Gesture} from 'ionic-angular/gestures/gesture';

@Directive({ selector: 'content' })

export class HighlightDirective implements OnInit, OnDestroy {
    el: HTMLElement;
    button: HTMLElement;
  pressGesture: Gesture;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    this.button = document.getElementById("back_button");
    console.log(this.button);
  }

  ngOnInit() {
    this.pressGesture = new Gesture(this.el);
    this.pressGesture.listen();
    this.pressGesture.on('pan', e => {

        var dir = e.direction;
        var horizontal = (dir == 4 || dir == 2);

        if(horizontal && e.deltaX >= 0) {
            this.el.style.transform = "translateX("+e.deltaX+"px)";
            this.button.style.transform = "translateX("+e.deltaX/2+"px)";
        }

    });
  }

  ngOnDestroy() {
    this.pressGesture.destroy();
  }
}