import React, { useState } from "react";

export default ({ label, onSearchSubmit }) => {
  const [term, setTerm] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(term);
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
