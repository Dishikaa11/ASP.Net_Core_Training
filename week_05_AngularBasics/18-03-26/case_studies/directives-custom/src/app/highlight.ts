import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}
  //Mouse Enters => apply Highlight
  @HostListener('mouseenter')
  onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  //Mouse Leaves -> remove Highlight
  @HostListener('mouseleave')
  onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = 'transparent';
  }
}

