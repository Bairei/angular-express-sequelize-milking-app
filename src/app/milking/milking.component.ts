import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-milking',
  templateUrl: './milking.component.html',
  styleUrls: ['./milking.component.css']
})
export class MilkingComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  milkings: any;
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor(private http: HttpClient) { }

  ngOnInit() {
     this.dtOptions = {
       pagingType : 'full_numbers',
       pageLength: 10
     };
    this.http.get('/milking')
    .subscribe(data => {
        console.log(data);
        this.milkings = data;
        this.dtTrigger.next();
    });
  }
}
