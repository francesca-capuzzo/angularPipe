import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appString]'
})
export class StringDirective implements OnInit{
   
@Input() string = "stringExist";

  constructor(private element: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT)private document: Document) { }
  ngOnInit(): void {
    const child = this.document.createElement('div');
   this.renderer.appendChild(this.element.nativeElement, child);
  }

}
