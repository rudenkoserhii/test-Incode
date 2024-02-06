import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { getRepo } from "../../redux/repo/slice";

export const Input = () => {
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(getRepo(e.target[0].value));
    e.target.reset();
  }

  return (
    <header>
      <Form className="d-flex" onSubmit={onSubmit} role="form">
        <Form.Control
          role="input"
          type="text"
          placeholder="Enter repo url. For example https://github.com/facebook/react"
          pattern='^(ftp|http|https):\/\/[^ "]+$'
        />
        <Button
          data-testid="button"
          variant="primary"
          type="submit"
          style={{
            whiteSpace: "nowrap",
            borderColor: "rgb(108,117,125)",
            background: "lightgrey",
            color: "rgb(33,37,41)",
          }}
        >
          Load issues
        </Button>
      </Form>
    </header>
  );
};
