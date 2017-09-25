import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImportant]'
})
export class ImportantDirective {

@Input() backgroundColor:string;
@Input('bgColor') backColor:string // you can use an alias like bgColor
@Input() appImportant:string;

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "red";
    el.nativeElement.style.fontSize = '20px';
    el.nativeElement.style.fontWeight = 'bold';
 }

 @HostListener('mouseenter') onMouseEnter() {
  //this.highlight(this.backgroundColor);
  this.highlight(this.backColor);
  //this.highlight(this.appImportant);
}

@HostListener('mouseleave') onMouseLeave() {
  this.highlight(null);
}

private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}

}
