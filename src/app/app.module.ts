import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';


import { AppComponent } from './app.component';
import { CowComponent } from './cow/cow.component';
import { MilkingComponent } from './milking/milking.component';

const appRoutes: Routes = [
  {
    path: 'cows',
    component: CowComponent,
    data: { title: 'Cow List' }
  },
  {
    path: '',
    redirectTo: '/cows',
    pathMatch: 'full'
  },
  {
    path: 'milkings',
    component: MilkingComponent,
    data: { title: 'MilkingList' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CowComponent,
    MilkingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // debugging
    ),
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
