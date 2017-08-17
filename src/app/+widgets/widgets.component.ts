import {
  Component,
  OnInit,
  ViewChild,
  Input,
  ElementRef,
  Pipe,
  PipeTransform,
  Renderer2,  forwardRef
} from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { TagsService } from './../shared/tags.service';

import { PeriodValues } from './../shared/data';
import { DashboardComponent, WidgetHandleDirective, WidgetComponent} from "ngx-dashboard";


@Component({
  selector: 'form',
  templateUrl: './widgets.component.html',
  styleUrls:['./widgets.component.scss'],
  host: {
    '(window:resize)': '_onResize($event)',
  },
  providers: [{provide: WidgetComponent, useExisting: forwardRef(() => WidgetsComponent) }]
})

export class WidgetsComponent implements OnInit {

  @ViewChild(DashboardComponent) dashboard: DashboardComponent;

  widgetsSize: number[] = [300, 150];
  dashboardMargin: number = 20;

  constructor(ngEl: ElementRef, renderer: Renderer2) {
   // super(ngEl, renderer);
  }

  ngOnInit(): void {
    this._onResize(null)
  }

  private _onResize(event: any) {
    if (window.innerWidth < 750) {
      this.dashboardMargin = 10;
      this.widgetsSize = [this.dashboard.width / 2 - this.dashboardMargin, this.widgetsSize[1]];
    }
    else {
      this.dashboardMargin = 20;
      const nbColumn = Math.floor(this.dashboard.width / (300 + this.dashboardMargin));
      this.widgetsSize = [this.dashboard.width / nbColumn - this.dashboardMargin, this.widgetsSize[1]];
    }
  }

  log(widget: WidgetComponent, type: string) {
    console.log(widget, type);
  }

  logOrder(order: Array<string>) {
    console.log(order, 'orderchange');
  }

  addWidget() {
   // const ref: MyWidgetComponent = this.dashboard.addItem(MyWidgetComponent);
   // ref.widgetId = Math.random() + '';
  }

  close(e: any, id: string) {
    this.dashboard.removeItemById(id);
    e.preventDefault();
    e.stopPropagation();
  }

}

