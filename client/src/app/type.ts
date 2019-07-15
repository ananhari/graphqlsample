import gql from "graphql-tag";
import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: "Author";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  age?: Maybe<Scalars["Int"]>;
  books?: Maybe<Array<Maybe<Book>>>;
};

export type Book = {
  __typename?: "Book";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  genre?: Maybe<Scalars["String"]>;
  author?: Maybe<Author>;
};

export type Mutation = {
  __typename?: "Mutation";
  addAuthor?: Maybe<Author>;
  addBook?: Maybe<Book>;
};

export type MutationAddAuthorArgs = {
  name: Scalars["String"];
  age: Scalars["Int"];
};

export type MutationAddBookArgs = {
  name: Scalars["String"];
  genre: Scalars["String"];
  authorId: Scalars["ID"];
};

export type RootQueryType = {
  __typename?: "RootQueryType";
  getbookbyId?: Maybe<Book>;
  getauthorbyId?: Maybe<Author>;
  getlistofbooks?: Maybe<Array<Maybe<Book>>>;
  getlistofauthors?: Maybe<Array<Maybe<Author>>>;
};

export type RootQueryTypeGetbookbyIdArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type RootQueryTypeGetauthorbyIdArgs = {
  id?: Maybe<Scalars["ID"]>;
};
export type AddBookMutationVariables = {
  name: Scalars["String"];
  genre: Scalars["String"];
  authorId: Scalars["ID"];
};

export type AddBookMutation = { __typename?: "Mutation" } & {
  addBook: Maybe<
    { __typename?: "Book" } & Pick<Book, "id" | "name" | "genre"> & {
        author: Maybe<{ __typename?: "Author" } & Pick<Author, "name">>;
      }
  >;
};

export type GetlistofauthorsQueryVariables = {};

export type GetlistofauthorsQuery = { __typename?: "RootQueryType" } & {
  getlistofauthors: Maybe<
    Array<Maybe<{ __typename?: "Author" } & Pick<Author, "id" | "name">>>
  >;
};

export type GetlistofbooksQueryVariables = {};

export type GetlistofbooksQuery = { __typename?: "RootQueryType" } & {
  getlistofbooks: Maybe<
    Array<
      Maybe<
        { __typename?: "Book" } & Pick<Book, "id" | "name" | "genre"> & {
            author: Maybe<{ __typename?: "Author" } & Pick<Author, "name">>;
          }
      >
    >
  >;
};

export type GetbookbyIdQueryVariables = {
  ID?: Maybe<Scalars["ID"]>;
};

export type GetbookbyIdQuery = { __typename?: "RootQueryType" } & {
  getbookbyId: Maybe<
    { __typename?: "Book" } & Pick<Book, "id" | "name" | "genre"> & {
        author: Maybe<{ __typename?: "Author" } & Pick<Author, "name">>;
      }
  >;
};

export const AddBookDocument = gql`
  mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
      genre
      author {
        name
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class AddBookGQL extends Apollo.Mutation<
  AddBookMutation,
  AddBookMutationVariables
> {
  document = AddBookDocument;
}
export const GetlistofauthorsDocument = gql`
  query getlistofauthors {
    getlistofauthors {
      id
      name
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetlistofauthorsGQL extends Apollo.Query<
  GetlistofauthorsQuery,
  GetlistofauthorsQueryVariables
> {
  document = GetlistofauthorsDocument;
}
export const GetlistofbooksDocument = gql`
  query getlistofbooks {
    getlistofbooks {
      id
      name
      genre
      author {
        name
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetlistofbooksGQL extends Apollo.Query<
  GetlistofbooksQuery,
  GetlistofbooksQueryVariables
> {
  document = GetlistofbooksDocument;
}
export const GetbookbyIdDocument = gql`
  query getbookbyId($ID: ID) {
    getbookbyId(id: $ID) {
      id
      name
      genre
      author {
        name
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetbookbyIdGQL extends Apollo.Query<
  GetbookbyIdQuery,
  GetbookbyIdQueryVariables
> {
  document = GetbookbyIdDocument;
}
