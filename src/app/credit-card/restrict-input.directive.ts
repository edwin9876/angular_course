import { Directive, HostListener, Injector, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[restrict-input]',
})
export class RestrictInputDirective {
  @Input('restrict-input')
  set mask(value) {
    this.regExpr = new RegExp(value);
  }
  @Input('label')
  set setLabel(label) {
    this.label = label;
  }

  private _oldvalue: string = '';
  private regExpr: any;
  private control: NgControl;
  private label: string;
  constructor(injector: Injector) {
    //this make sure that not error if not applied to a NgControl
    try {
      this.control = injector.get(NgControl);
    } catch (e) {}
  }
  @HostListener('keydown', ['$event'])
  focus($event) {
    let item = $event.target;
    let value = item.value;

    let pos = item.selectionStart; //get the position of the cursor
    console.log(this.label);
    switch (this.label) {
      case 'Expiry Date':
        if (pos === 2 && !isNaN(parseInt($event.key))) {
          item.setRangeText('/');
          item.selectionStart = item.selectionEnd = pos + 1;
          console.log(value);
          console.log($event.key);
        }
        if (pos === 3 && $event.key === 'Backspace') {
          value = value.replace('/', '');
          $event.target.value = value;
          console.log(value);
          if (this.control) console.log(this.control.control);
        }

        break;

      default:
        break;
    }

    let matchvalue = value;
    let noMatch: boolean = value && !this.regExpr.test(matchvalue);
    if (noMatch) {
      item.selectionStart = item.selectionEnd = pos - 1;
      if (item.value.length < this._oldvalue.length && pos == 0) pos = 2;
      if (this.control)
        this.control.control.setValue(this._oldvalue, { emit: false });

      item.value = this._oldvalue;
      item.selectionStart = item.selectionEnd = pos - 1; //recover the position
    } else this._oldvalue = value;
  }

  // @HostListener('input', ['$event'])
  // change($event) {
  //   let item = $event.target;

  //   let value = item.value;

  //   let pos = item.selectionStart; //get the position of the cursor
  //   console.log(pos);
  //   let matchvalue = value;
  //   let noMatch: boolean = value && !this.regExpr.test(matchvalue);
  //   if (noMatch) {
  //     item.selectionStart = item.selectionEnd = pos - 1;
  //     if (item.value.length < this._oldvalue.length && pos == 0) pos = 2;
  //     if (this.control)
  //       this.control.control.setValue(this._oldvalue, { emit: false });

  //     item.value = this._oldvalue;
  //     item.selectionStart = item.selectionEnd = pos - 1; //recover the position
  //   } else this._oldvalue = value;
  // }
}
