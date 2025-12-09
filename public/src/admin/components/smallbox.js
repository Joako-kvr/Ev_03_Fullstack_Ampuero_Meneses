import React from "react";

function SmallBox({ color, icon, value, title, buttonText, onClick }) {
  return (
    <div className="col-lg-3 col-6">
      <div className={`small-box ${color}`}>
        <div className="inner">
          <h3>{value}</h3>
          <p>{title}</p>
        </div>
        <div className="icon">
          <i className={icon} />
        </div>
        <a href="#!" className="small-box-footer" onClick={onClick}>
          {buttonText} <i className="fas fa-arrow-circle-right" />
        </a>
      </div>
    </div>
  );
}

export default SmallBox;
