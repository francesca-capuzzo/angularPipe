import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})


export class BackgroundDirective implements OnInit{

  @Input() appBackground = 'white';
  @Input() appBackgroundTextColor = 'black';

  constructor(private element: ElementRef, private renderer: Renderer2) { }


  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, "background-color", this.appBackground);
    this.renderer.setStyle(this.element.nativeElement, "color", this.appBackgroundTextColor);
  }

}


//default elementi block ma volendo possiamo passare inline-block + w + h e ridimensiona
//direttiva che simula l'ngIf che se passo true fa vedere l'elemento mentre false lo nasconde 