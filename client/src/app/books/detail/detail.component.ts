import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import gql from 'graphql-tag';
import {Book,GetbookbyIdGQL} from '../../type';

const GetBookById = gql`
query getbookbyId($ID:ID){
  getbookbyId(id:$ID){
    id,
    name,
    genre,
    author{
      name
    }
  }
}
`;


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  isLoadingResults = true;
  book:Book ={id:'',name:'',genre:''};
  isShowResult = false;
  result = "";
  constructor(
    private getbookbyIdGQL:GetbookbyIdGQL,
    private router: Router, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getbookbyid();
  }

  private getbookbyid()
  {
    const id = this.route.snapshot.params.id;
     this.getbookbyIdGQL
     .watch({ ID:id})
     .valueChanges.subscribe(result=>{
      if(result.errors==null)
      {
         console.log(result.data.getbookbyId);
         this.book = result.data.getbookbyId;
         this.isLoadingResults=false;
      }
      else
        console.log(result);
     });
  }

  deleteBook(){
    console.log("not implemented");
    this.isShowResult=true;
    this.result = "delete not implemented";
  } 
}
