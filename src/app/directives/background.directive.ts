import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})


export class BackgroundDirective implements OnInit{

  @Input() appBackground = "white"

  constructor(private element: ElementRef, private renderer: Renderer2) { }


  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, "background-color", "black")
  }

}
