import { gql } from "@apollo/client";

export const GetBooks = gql`
  query getBooks {
    getBooks {
      id
      title
      author
      publicationYear
      createdAt
      updatedAt
    }
  }
`;

export const GetBooksByID = (id) => gql`
  query {
    getBookByID(id: ${id}) {
      id
      title
      author
      publicationYear
      createdAt
      updatedAt
    }
}`;
