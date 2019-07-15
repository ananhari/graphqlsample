import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GraphQLModule} from './apollo.config';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { MatTableModule,MatProgressSpinnerModule,MatButtonModule,MatIconModule,MatCardModule,MatFormFieldModule, MatInputModule,MatSelectModule} from '@angular/material';
import { DetailComponent } from './books/detail/detail.component';
import { AddComponent } from './books/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AuthorsComponent,
    DetailComponent,
    AddComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GraphQLModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
