import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cow-edit',
  templateUrl: './cow-edit.component.html',
  styleUrls: ['./cow-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CowEditComponent implements OnInit {

  genders = [
    { name: 'Female'},
    { name: 'Male' }
  ];
  cow: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get('/cow/' + this.route.snapshot.params['id']).subscribe(data => {
      this.cow = data;
    });
  }

  updateCow(id) {
    this.http.put('/cow/' + id, this.cow)
      .subscribe(res => {
        let resId = res['id'];
        this.router.navigate(['/cow-details', resId]);
      }, err => {
        console.log(err);
      });
  }
}
