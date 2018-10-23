import { Directive, ElementRef, ViewContainerRef, Input, TemplateRef } from '@angular/core';
@Directive({
  selector: '[appStructurel]'
})
export class StructurelDirective {

  @Input() set appStructurel(condition: boolean) {
  if(condition) { 
    this.vwRef.createEmbeddedView(this.elRef);}
  else {this.vwRef.clear();}
  }
  constructor(private elRef: TemplateRef<any>, private vwRef: ViewContainerRef) {}

}
