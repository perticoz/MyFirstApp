import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective implements OnInit{

  constructor(private elRef: ElementRef, private rend: Renderer2) { }

  ngOnInit() {

  }

@HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
  this.rend.setStyle(this.elRef.nativeElement, 'color', 'red');
  this.rend.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
}

@HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
  this.rend.setStyle(this.elRef.nativeElement, 'color', 'black');
  this.rend.setStyle(this.elRef.nativeElement, 'font-weight', 'normal');
}

}
