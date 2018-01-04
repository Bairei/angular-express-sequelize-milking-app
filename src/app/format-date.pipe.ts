import {Pipe, PipeTransform} from '@angular/core';
import * as moment from '../../node_modules/moment';

@Pipe({
  name: 'formatDate'
})

export class FormatDatePipe implements PipeTransform {
  transform(value: Date | moment.Moment | string | number, ...args: any[]) {
   if (!value) {
     return '';
   }
   return moment(value).format(args[0]);
  }
}
