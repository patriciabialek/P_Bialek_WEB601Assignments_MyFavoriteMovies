import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGradeHighlight]',
  standalone: true
})
export class GradeHighlightDirective {
  @Input('Grade') grade: number;

  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
    if (this.grade >= 50) {
      alert("This is a passing grade");
    } else {
      alert("This is a failing grade");
    }

    this.el.nativeElement, 'font-size', '40px';
    this.el.nativeElement, 'font-weight', 'bold';

    if (this.grade >= 50) {
      this.el.nativeElement, 'color', 'green';
    } else {
      this.el.nativeElement, 'color', 'red';
    }
  }
}

