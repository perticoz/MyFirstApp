import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective implements OnInit{

  constructor(private elRef: ElementRef, private rend: Renderer2) { }

  ngOnInit() {

  }
  @HostListener('mouseover')
  onMouseOver() {
    this.rend.addClass(this.elRef.nativeElement, 'belleclasse');
}
@HostListener('mouseleave') 
onMouseLeave() {
    this.rend.removeClass(this.elRef.nativeElement, 'belleclasse');

}

}
