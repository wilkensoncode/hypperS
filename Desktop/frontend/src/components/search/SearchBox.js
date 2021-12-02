import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./styles.css";
const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);

    } else {
      history.push("/");
    }
  };
  return (
    <div className="justify-content-end flex-grow-1">
      <Form onSubmit={handleSearch} className="d-flex">
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}        
          placeholder="Search product..."
          className="m-1 search-border "
        ></Form.Control>
        <Button type="submit" variant="outline-success" className="m-1 btn-sm">
          Search 
        </Button>
      </Form>
    </div>
  );
};

export default SearchBox;
