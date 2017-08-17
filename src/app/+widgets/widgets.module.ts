import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {NgDashboardModule} from 'ngx-dashboard';

import { Md2Module } from 'md2';

import { TableService } from './../shared/table.service';
import { TagsService } from './../shared/tags.service';

import { routes } from './widgets.routes.ts';
import { WidgetsComponent } from './widgets.component.ts';
import { MyWidgetComponent } from './widget/widget.component.ts';
import { DataTableComponent } from './+datatable/datatable.component';
import { DataFilterPipeForTagsMultiSelect } from './../pipes/datafilter.pipe'

import 'jquery';

import 'datatables.net';
import 'datatables.net-buttons/js/dataTables.buttons.js';
import 'datatables.net-buttons/js/buttons.colVis.js';
import 'datatables.net-buttons/js/buttons.flash.js';
import 'datatables.net-buttons/js/buttons.html5.js';
import 'datatables.net-buttons/js/buttons.print.js';

var pdfMake = require('pdfmake/build/pdfmake.js');
var pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    MyWidgetComponent,
    WidgetsComponent,
    DataTableComponent,
    DataFilterPipeForTagsMultiSelect,
  ],
  entryComponents: [
    MyWidgetComponent,DataTableComponent
  ],
  imports: [
    CommonModule,
    NgDashboardModule,
    ReactiveFormsModule,
    FormsModule,
    Md2Module,
    RouterModule.forChild(routes),
  ],
  providers: [TagsService,TableService]
})

export class WidgetsModule {
  public static routes = routes;
}
