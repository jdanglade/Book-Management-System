import "./App.css";
import { useState, useContext } from "react";
import BookCard from "./components/BookCard";
import { Forms } from "./components/Forms";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "./ClientGQL.mjs";


function App() {
  return (
    <div className="App">
      <header className="App-header">Book Managment System</header>
      <BookManagmentSystem className="Book-Manager">
        <BooksDisplay className="Books-Display" />
        <Forms className="Forms" />
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

const BooksDisplay = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

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
    <BooksContainer>
      {data.getBooks.map((book, index) => {
        return <BookCard key={index} book={book} />;
      })}
    </BooksContainer>
  );
};

export default App;
