import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitleUnderline]'
})
export class TitleUnderlineDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.underlineOn();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.underlineOff();
  }

  private underlineOn() {
    this.elementRef.nativeElement.style = 'text-decoration: underline';
  }

  private underlineOff() {
    this.elementRef.nativeElement.style = 'text-decoration: none';
  }

}
