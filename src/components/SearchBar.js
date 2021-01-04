import React, { useState } from "react";

export default ({ label, data }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    //console.log(this.state.term);
    e.preventDefault();

    //pass it as props to the parent
    data(term);
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
