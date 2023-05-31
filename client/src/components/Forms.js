import React, { useState } from "react";
import { useMutation } from "@apollo/client";

export const Forms = (props) => {
  const [validInput, setValidInput] = useState(false);

  return (
    <>
      <div className="Forms-container">
        <form className="Form">
          <h1>Add Book</h1>
          <label className="Forms-label" type="text">
            Title
            <input type="text" className="input-text" />
          </label>
          <label className="Forms-label">
            Author
            <input type="text" className="input-text" />
          </label>
          <label className="Forms-label">
            Publication Year
            <input type="text" className="input-text" />
          </label>
          <input type="submit" className="input-submit" />
        </form>
      </div>
    </>
  );

  const validateInput = (e) => {
    

  };
};
