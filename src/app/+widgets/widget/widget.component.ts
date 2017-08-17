import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Renderer2, ElementRef, forwardRef
} from '@angular/core';

import {WidgetComponent} from "ngx-dashboard";

@Component({
  selector: 'calendar',
  template: `

  `,
  providers: [{provide: WidgetComponent, useExisting: forwardRef(() => MyWidgetComponent) }]
})

export class MyWidgetComponent implements OnInit {


  @Input() public widgetId: string;

  constructor(ngEl: ElementRef, renderer: Renderer2) {
    super(ngEl, renderer);
  }

  ngOnInit(){

  }

}

