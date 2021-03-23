import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TableModule } from 'primeng/table';
import { DialogService } from 'primeng/dynamicdialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { AddCommandComponent } from './components/add-command/add-command.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCommandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      DataService, { dataEncapsulation: false }
    ),
    TableModule,
    ReactiveFormsModule
  ],
  providers: [DataService, DialogService],
  bootstrap: [AppComponent],
})
export class AppModule { }
