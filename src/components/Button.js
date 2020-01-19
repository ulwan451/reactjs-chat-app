import React from "react";

const Button = ({ onClick, title, loading, className }) => {
  if (loading) {
    return (
      <div
        className="spinner-border"
        style={{ color: " #06d194" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <button type="submit" className={className} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
