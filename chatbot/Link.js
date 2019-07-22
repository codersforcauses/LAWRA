import React from "react";

export default ({ message, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {message}
    </a>
  );
};
