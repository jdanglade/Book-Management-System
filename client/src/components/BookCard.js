import React from "react";

const BookCard = (props) => {
  return (
    <div className="Book-card">
      <h2 className="Card-title">{props.book.title}</h2>
      <h4 className="Card-author">{props.book.author}</h4>
      <h5 className="Card-publicationYear">{props.book.publicationYear}</h5>
    </div>
  );
};

export default BookCard;
