import { Component, OnInit, Input } from '@angular/core';
import gql from 'graphql-tag';
import {Book,GetbookbyIdGQL,GetlistofbooksGQL} from '../type';
import { MatTableDataSource} from '@angular/material';


const GetListofBooks = gql `
query getlistofbooks{
  getlistofbooks{
    id,
    name
    genre
    author{
      name
    }
  }
}
`;

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  displayedColumns: string[] = ['name', 'genre','author'];
  dataSource = new MatTableDataSource<any>([]);
  isLoadingResults = true;
  constructor( 

    private getlistofbooksGQL:GetlistofbooksGQL
  ) 
  {

  }

  ngOnInit() {
     this.loadbooks();
  }

  private loadbooks()
  {
     this.getlistofbooksGQL
      .watch()
      .valueChanges.subscribe(result=>{
         if(result.errors==null)
         {
            console.log(result.data.getlistofbooks);
            this.dataSource.data=result.data.getlistofbooks;
            this.isLoadingResults=false;
         }
         else
           console.log(result);
      });
  }

 

}
