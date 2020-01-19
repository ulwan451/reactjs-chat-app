import React from "react";
import "../style/Loading.scss";

export default function Loading() {
  return (
    <div className="container-loading container-fluid">
      <div className="spinner">
        <div className="spinner-text">Loading</div>
        <div className="spinner-sector spinner-sector-red"></div>
        <div className="spinner-sector spinner-sector-blue"></div>
        <div className="spinner-sector spinner-sector-green"></div>
      </div>
    </div>
  );
}
