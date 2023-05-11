import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { getRepo } from "../../redux/repo/slice";

export const Input = () => {
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(getRepo(e.target[0].value));
    // searchUrl(e.target[0].value);
    e.target.reset();
  }

  return (
    <header>
      <Form className="d-flex" onSubmit={onSubmit}>
        <Form.Control
          type="text"
          placeholder="Enter repo url"
          pattern='^(ftp|http|https):\/\/[^ "]+$'
        />
        <Button
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

// Input.propTypes = {
//   searchUrl: PropTypes.function,
// };
