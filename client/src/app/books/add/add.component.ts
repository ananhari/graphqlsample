import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators, } from '@angular/forms';
import gql from 'graphql-tag';
import {AddBookGQL,GetlistofauthorsGQL} from '../../type';

const AddBook = gql`
mutation addBook($name:String!,$genre:String!,$authorId:ID!){
  addBook(name:$name,genre:$genre,authorId:$authorId){
     id,
     name,
     genre,
     author{
       name
     }
  }
}
`;

const GetListofAuthors = gql `
query getlistofauthors{
  getlistofauthors{
    id,
    name
  }
}
`;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {
  book: any = { name: '', genre: '', authorId: ''};
  authors:any = {id:'',name:''};
  isLoadingResults = false;
  resp: any = {};
  bookForm: FormGroup;
  name = '';
  genre = '';
  authorId ='';
  constructor(
    private addBookGQL:AddBookGQL,
    private getlistofauthorsGQL:GetlistofauthorsGQL,
    private router: Router, private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    
    this.bookForm = this.formBuilder.group({
      name : [null, Validators.required],
      genre : [null, Validators.required],
      author : [null, Validators.required]
    });
    this.loadauthors();
  }

  get f() {
    return this.bookForm.controls;
  }
   
  loadauthors()
  {
    this.getlistofauthorsGQL
      .watch()
      .valueChanges.subscribe(result=>{
         if(result.errors==null)
         {
            console.log(result.data.getlistofauthors);
            this.authors=result.data.getlistofauthors;
         }
         else
           console.log(result);
      });
  }

  onSubmit(form: NgForm) {
    this.isLoadingResults = true;
    const bookData = form.value;
    this.addBookGQL.mutate({
      name:bookData.name,
      genre:bookData.genre,
      authorId:bookData.author
    }).subscribe(({ data }) => {
      console.log('got data', data);
      this.isLoadingResults = false;
      this.router.navigate(['/books/detail/', data.addBook.id]);
    }, (error) => {
      console.log('there was an error sending the query', error);
      this.isLoadingResults = false;
    });
  }
}
