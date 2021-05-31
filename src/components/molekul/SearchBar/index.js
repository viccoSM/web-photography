import React from "react";
import { Button, TextField } from "../../atom";
import Search from "../../../assets/images/icon-search.png";
import { Link } from "react-router-dom";

const SearchBar = (props) => {
  return (
    <div className="d-flex flex-row">
      <TextField
        placeholder="Search"
        name="search"
        id="search"
        value={props.data}
        onChange={props.onChange}
      />
      <Button
        type="link"
        onClick={props.onClick}
        style={{ height: 30 }}
        children={<img src={Search} />}
      />
      {/* <button style={{ height: 30 }}></button> */}
    </div>
  );
};

export default SearchBar;
