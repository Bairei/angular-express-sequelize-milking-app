import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cow-detail',
  templateUrl: './cow-detail.component.html',
  styleUrls: ['./cow-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CowDetailComponent implements OnInit {

  cow = {};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get('/cow/' + this.route.snapshot.params['id']).subscribe(data => {
      this.cow = data;
    });
  }

  deleteCow(id) {
    this.http.delete('/cow/' + id)
      .subscribe(res => {
        this.router.navigate(['/cows']);
      }, (err) => {
        console.log(err);
      });
  }
}
