import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';


import { AppComponent } from './app.component';
import { CowComponent } from './cow/cow.component';
import { MilkingComponent } from './milking/milking.component';
import { CowDetailComponent } from './cow-detail/cow-detail.component';
import { CowCreateComponent } from './cow-create/cow-create.component';
import { MilkingCreateComponent } from './milking-create/milking-create.component';
import { MilkingDetailComponent } from './milking-detail/milking-detail.component';
import { FormatDatePipe } from './format-date.pipe';
import { CowEditComponent } from './cow-edit/cow-edit.component';
import { MilkingEditComponent } from './milking-edit/milking-edit.component';

const appRoutes: Routes = [
  {
    path: 'cows',
    component: CowComponent,
    data: { title: 'Cow List' }
  },
  {
    path: 'milkings',
    component: MilkingComponent,
    data: { title: 'MilkingList' }
  },
  {
    path: 'cow-details/:id',
    component: CowDetailComponent,
    data: { title: 'Cow Details' }
  },
  {
    path: 'cow-create',
    component: CowCreateComponent,
    data: { title: 'New Cow' }
  },
  {
    path: 'cow-edit/:id',
    component: CowEditComponent,
    data: { title: 'Edit Cow'}
  },
  {
    path: 'milking-edit/:id',
    component: MilkingEditComponent,
    data: { title: 'Edit Milking' }
  },
  {
    path: 'milking-details/:id',
    component: MilkingDetailComponent,
    data: { title: 'Milking Details' }
  },
  {
    path: 'milking-create',
    component: MilkingCreateComponent,
    data: { title: 'New Milking' }
  },
  {
    path: '',
    redirectTo: '/cows',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CowComponent,
    MilkingComponent,
    CowDetailComponent,
    CowCreateComponent,
    MilkingCreateComponent,
    MilkingDetailComponent,
    FormatDatePipe,
    CowEditComponent,
    MilkingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // debugging
    ),
    DataTablesModule,
    NgSelectModule,
    LoggerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
