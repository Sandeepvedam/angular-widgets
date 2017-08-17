import { Component, OnInit, ViewEncapsulation, ViewChild, forwardRef } from '@angular/core';
import { DashboardComponent, WidgetHandleDirective, WidgetComponent} from "ngx-dashboard";

import { TableService } from './../../shared/table.service';

declare interface TableData {
  headerRow: Object[];
  dataRows: Object[][];
}

@Component({
  selector: 'data-table',
  templateUrl: './datatable.component.html',
  styleUrls:['./../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css',
    './../../../../node_modules/datatables.net-buttons-dt/css/buttons.dataTables.css',
    'datatable.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{provide: WidgetComponent, useExisting: forwardRef(() => DataTableComponent) }]
})

export class DataTableComponent implements OnInit{

  @ViewChild(WidgetHandleDirective) protected _handle: WidgetHandleDirective;
  private isDataAvailable:boolean = false;

  dtOptions: any = {};

  public tableName : string;

  public tableData: TableData;

  constructor(private tableService : TableService) { }

  ngOnInit(): void {
    this.dtOptions = {
      paginationType: 'full_numbers',
      displayLength: 5,
      dom: 'Bfrtip',
      buttons: [
        'excel',
        'pdf',
        { // default PDF and customized PDF
          extend: 'pdfHtml5',
          title: 'Device Utilization Details', // report header/title
          orientation: 'landscape',
          pageSize: 'A2',
          pageMargins: [ 0, 0, 0, 0 ], // try #1 setting margins
          margin: [ 0, 0, 0, 0 ], // try #2 setting margins
          text: '<u>E</u>xport Page (PDF)',
          key: { // press E for export PDF
            key: 'e',
            altKey: false
          }
          , content: [{ style: 'fullWidth',layout: 'lightHorizontalLines', // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: [ '*', 'auto', 100, '*' ]
          }}]
          , styles: { // style for printing PDF body
          fullWidth: { fontSize: 18, bold: true, alignment: 'right', margin: [0,0,0,0] }
        },
          download: 'download',
          exportOptions: {
            modifier: {
              pageMargins: [ 0, 0, 0, 0 ], // try #3 setting margins
              margin: [ 0, 0, 0, 0 ], // try #4 setting margins
              alignment: 'center'
            }
            , body : {margin: [ 0, 0, 0, 0 ], pageMargins: [ 0, 0, 0, 0 ]} // try #5 setting margins
             //column id visible in PDF
            , columnGap: 1 // optional space between columns
          }
        }
      ]
    }
    this.getTableData();
  }

  getTableData(){

    this.tableService.getTableMockData().subscribe(
        data => {

        this.tableName = data.Name;

        let tableHeaders = data.ReportItems.Table.ColumnHeaders;
        let tableRows = data.ReportItems.Table.Details;

        this.tableData = {
          headerRow: tableHeaders,
          dataRows: tableRows
        };

        this.isDataAvailable = true;
      }
    );

  }

}
