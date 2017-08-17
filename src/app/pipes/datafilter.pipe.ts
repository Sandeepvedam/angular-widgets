import {
  Component,
  OnInit,
  ViewChild,
  Input,
  ElementRef,
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({ name: 'dataPipe' })
export class DataFilterPipeForTagsMultiSelect implements PipeTransform {
  transform(array: any[], query: string): any {
    if (query) {
      query = query.toLowerCase();
      return array.filter((value: any) =>
      //value.indexOf(query) > -1);
      value.tagDisplayName.toLowerCase().indexOf(query) > -1);
    }
    return array;
  }
}
