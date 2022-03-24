import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appBlackBackground]'
})
export class BlackBackgroundDirective implements OnInit{

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  
  
  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, "background-color", "black");
    //al this.element va aggiunta pa proprietà nativeElement per far si che prenda l'elemento giusto quando gli si passa la direttiva --> in questo caso nell'app.component.html viene data all'h1 del titolo
  }

  

}




/*
    DIRETTIVE CLASSICHE -> <app-list> / <router-outlet> .. -> tag che non esistono nell'html normale
    DIRETTIVE FUNZIONALI -> ngIf / ngFor / ngSwitch -> potenziano elementi dell'html 
    DIRETTIVE ESTETICHE -> ngStyle / ngClass -> di stile
    DIRETTIVE CUSTOM -> direttive create ad-hoc per ciò che ci serve nel progetto


    di solito la direttiva ha bisogno di 2 import particolari:
    1- l'ELEMENTO su cui viene chiamata --> ELEMENTREF DA @ANGULAR/CORE
    2- il RENDERER che ci aiuta a modificare l'estetica dell'elemento -> RENDERER2 DA @ANGULAR/CORE
*/