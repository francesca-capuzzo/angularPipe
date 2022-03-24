import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appExist]'
})
export class ExistDirective implements OnInit{

  @Input() appExist = "hidden";


  constructor(private element: ElementRef, private renderer: Renderer2) { }


  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, "visibility", this.appExist);
  }

}
