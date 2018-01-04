import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-milking-detail',
  templateUrl: './milking-detail.component.html',
  styleUrls: ['./milking-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MilkingDetailComponent implements OnInit {

  cow = {};
  milking = {};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get('/milking/' + this.route.snapshot.params['id']).subscribe(data => {
      this.milking = data;
      this.http.get('/cow/' + data['cowId']).subscribe(res => {
        this.cow = res;
      });
    });
  }

  deleteMilking(id) {
    this.http.delete('/milking/' + id)
      .subscribe(res => {
        this.router.navigate(['/milkings']);
      }, (err) => {
        console.log(err);
      });
  }
}
