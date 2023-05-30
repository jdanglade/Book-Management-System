import "./App.css";
import { useState } from "react";
import BookCard from "./components/BookCard";
import { useQuery, gql } from "@apollo/client";
import { GetBooks } from "./ClientGQL.mjs";

function App() {
  const { loading, error, data } = useQuery(GetBooks);
  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data.getBooks);
  }

  return (
    <div className="App">
      <header className="App-header">Book Managment System</header>
      <BookManagmentSystem>
        <BooksContainer>
          {data.getBooks.map((book, index) => {
            return <BookCard key={index} book={book} />;
          })}
        </BooksContainer>
        <Forms />
      </BookManagmentSystem>
    </div>
  );
}

const BookManagmentSystem = (props) => {
  return <div className="Book-manager-container">{props.children}</div>;
};

const BooksContainer = (props) => {
  return (
    <div className="Books-container">
      <h1 className="Books-container-header">Book Library</h1>
      {props.children}
    </div>
  );
};

const FormsContainer = (props) => {
  return;
};

const Forms = (props) => {
  return (
    <>
      <div className="Forms-container">
        <form className="Form">
          <h1>Add Book</h1>
          <label className="Forms-label">
            Title:
            <input type="text" className="input-text" />
          </label>
          <label className="Forms-label">
            Author:
            <input type="text" className="input-text" />
          </label>
          <label className="Forms-label">
            Publication Year:
            <input type="text" className="input-text" />
          </label>
          <input type="submit" className="input-submit" />
        </form>
      </div>
    </>
  );
};

export default App;
