import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

export const Issue = ({ issue }) => {
  const { id, title, number, updated_at, user, comments } = issue;

const { login } = user;

const days = Math.floor((new Date() - new Date(updated_at)) / 1000 / 60 / 60 / 24)

// console.log(issue)
  return (
    <Card id={id} style={{background: 'transparent', border: 'none'}}>
      <Card.Body style={{background: 'lightgrey', borderRadius: '20px', border: 'none', boxShadow: '1px 1px 2px 2px black'}}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>#{number} opened {days} days ago</Card.Text>
        <Card.Text>{login} | Comments: {comments}</Card.Text>
      </Card.Body>
    </Card>
  );
};

Issue.propTypes = {
  issue: PropTypes.objectOf(
    PropTypes.shape({
id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      updated_at: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
      comments: PropTypes.number.isRequired,
    }),
  ),
};
