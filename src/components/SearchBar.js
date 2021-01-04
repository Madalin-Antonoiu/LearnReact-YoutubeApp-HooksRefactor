import React, { useState } from "react";

export default ({ label, onFormSubmit }) => {
  const [term, setTerm] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>{label}</label>
          <br />
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            placeholder="Type and press Enter"
          />
        </div>
      </form>
    </div>
  );
};
