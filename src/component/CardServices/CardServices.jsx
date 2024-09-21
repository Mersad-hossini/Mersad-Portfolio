import React from "react";

export default function CardServices({ title, desc }) {
  return (
    <div className="row services-content">
      <div id="service-section" className="services-list">
        <div className="service">
          <span className="icon">
            <i className="icon-earth"></i>
          </span>
          <div className="service-content">
            <h3>{title}</h3>
            <p className="desc">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
