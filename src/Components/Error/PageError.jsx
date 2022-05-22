import React from "react";

const PageError = (props) => {
  return <div className="PageError">❌{props.error.message}😱</div>;
};

export default PageError;
