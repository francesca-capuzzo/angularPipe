import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResizing]'
})
export class ResizingDirective implements OnInit{

  @Input() appDisplay = "block";
  @Input() appWidth = "300px";
  @Input() appHeight = "300px";


  constructor(private element: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
this.renderer.setStyle(this.element.nativeElement, "display", this.appDisplay)
this.renderer.setStyle(this.element.nativeElement, "width", this.appWidth)
this.renderer.setStyle(this.element.nativeElement, "height", this.appHeight)
  }

  
}
