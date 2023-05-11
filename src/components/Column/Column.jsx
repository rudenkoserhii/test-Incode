import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { nanoid } from "nanoid";
import { Movable } from "./Movable";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import { COLUMN_NAMES } from "../../constants/constants";
import { Spinner } from "react-bootstrap";

export const Column = ({ column, title, setPage, removeButton, isLoading }) => {

  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),

    canDrop: (item) => {
      const { TO_DO, IN_PROGRESS, DONE } = COLUMN_NAMES;
      const { currentColumnName } = item;
      return (
        currentColumnName === title ||
        (currentColumnName === TO_DO && title === IN_PROGRESS) ||
        (currentColumnName === IN_PROGRESS &&
          (title === TO_DO || title === DONE)) ||
        (currentColumnName === DONE && title === IN_PROGRESS)
      );
    },
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
        >
          {title}
        </Card.Title>
        <ListGroup as="ul" ref={drop} style={{ height: "100%" }}>
          {column.map((issue, index) => (
            <Movable issue={issue} index={index} title={title} key={nanoid()} />
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
