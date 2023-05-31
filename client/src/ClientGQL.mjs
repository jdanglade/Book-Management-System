import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
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

// export const GetBooksByID = (id) => gql`
//   query {
//     getBookByID(id: ${id}) {
//       id
//       title
//       author
//       publicationYear
//       createdAt
//       updatedAt
//     }
// }`;

export const AddBook = gql`
  mutation CreateBook(
    $title: String!
    $author: String!
    $publicationYear: Int!
  ) {
    createBook(
      title: $title
      author: $author
      publicationYear: $publicationYear
    ) {
      id
      title
      author
      publicationYear
      createdAt
      updatedAt
    }
  }
`;
