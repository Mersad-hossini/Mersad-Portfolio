import React from "react";

export default function SectionTitle(props) {
  return (
    <div className="row section-intro">
      <div className="col-twelve">
        <h5>{props.title}</h5>
        <h1>{props.subtext}</h1>

        <p className="lead">{props.desc}</p>
      </div>
    </div>
  );
}
