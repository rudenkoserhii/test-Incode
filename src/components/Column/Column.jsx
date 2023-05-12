import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { nanoid } from "nanoid";
import { Movable } from "./Movable";
import { useDrop } from "react-dnd";
import { Spinner } from "react-bootstrap";

export const Column = ({ column, title, setPage, removeButton, isLoading }) => {
  const [, drop] = useDrop({
    accept: "Movable",
    drop: () => ({ name: title }),
  });

  return (
    <Col
      style={{
        width: "calc((100% / 3)",
      }}
    >
      <Card bg="secondary" style={{ height: "100%" }}>
        <Card.Title
          style={{
            color: "white",
            fontSize: "30px",
            textAlign: "center",
            paddingTop: "20px",
          }}
          role='title'
        >
          {title}
        </Card.Title>
        <ListGroup as="ul" ref={drop} style={{ height: "100%" }}>
          {column.map((issue, index) => (
            <Movable issue={issue} index={index} title={title} key={nanoid()}       role="issue"
/>
          ))}
          {!removeButton && column.length !== 0 && (
            <Button
              onClick={() => setPage(title)}
              style={{
                margin: "10px auto 0px auto",
                width: "50%",
                whiteSpace: "nowrap",
                borderColor: "rgb(108,117,125)",
                background: "lightgrey",
                color: "rgb(33,37,41)",
              }}
            >
              Load more
            </Button>
          )}
        </ListGroup>
      </Card>
      {isLoading && (
        <Spinner
          animation="border"
          role="status"
          style={{
            margin: "0px auto 0px auto",
            display: "block",
          }}
        ></Spinner>
      )}
    </Col>
  );
};

Column.propTypes = {
  column: PropTypes.array,
  title: PropTypes.string.isRequired,
  setPage: PropTypes.func,
  removeButton: PropTypes.bool,
  isLoading: PropTypes.bool,
};
