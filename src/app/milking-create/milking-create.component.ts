import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-milking-create',
  templateUrl: './milking-create.component.html',
  styleUrls: ['./milking-create.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MilkingCreateComponent implements OnInit {

  cows: any;
  milking = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get('/cow').subscribe(data => {
      this.cows = data;
    });
  }

  saveMilking() {
    this.http.post('/milking', this.milking).subscribe(res => {
      const id = res['id'];
      this.router.navigate(['/milking-details/', id]);
    }, err => {
      console.log(err);
    });
  }
}
