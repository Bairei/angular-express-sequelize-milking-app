import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-milking-edit',
  templateUrl: './milking-edit.component.html',
  styleUrls: ['./milking-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MilkingEditComponent implements OnInit {

  cows: any;
  milking: any = {};
  cow: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get('/milking/' + this.route.snapshot.params['id']).subscribe(data => {
      this.milking = data;
      this.http.get('/cow/' + data['id']).subscribe(cowData => {
        this.cow = cowData;
        this.http.get('/cow').subscribe(cowsData => {
          this.cows = cowsData;
        });
      });
    });
  }

  updateMilking(id) {
    this.http.put('/milking/' + id, this.milking)
      .subscribe(res => {
        const resId = res['id'];
        this.router.navigate(['milking-details', resId]);
      }, err => {
        console.log(err);
      });
  }

}
