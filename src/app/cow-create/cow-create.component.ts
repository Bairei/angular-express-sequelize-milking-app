import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-cow-create',
  templateUrl: './cow-create.component.html',
  styleUrls: ['./cow-create.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [NGXLogger]
})
export class CowCreateComponent implements OnInit {

  genders = [
    { name: 'Female'},
    { name: 'Male' }
  ];

  cow = {};

  constructor(private http: HttpClient, private router: Router, private logger: NGXLogger) { }

  ngOnInit() {
  }

  saveCow() {
    this.logger.debug(this.cow);
    this.http.post('/cow', this.cow).subscribe(res => {
      this.logger.debug('res:');
      this.logger.debug(res);
      const id = res['id'];
      this.router.navigate(['/cow-details/', id]);
    }, err => {
      this.logger.error(err);
    });
  }

}
