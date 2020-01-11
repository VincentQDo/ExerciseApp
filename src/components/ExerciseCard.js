import React, { Component } from "react";
import "./ExerciseCard.css";

export default class ExerciseCard extends Component {
  render() {
    const style = { width: "18rem" };
    return (
      <div className="card vw-100">
        <div
          className="card-header black-text"
          dangerouslySetInnerHTML={{ __html: this.props.name }}
        />
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <div
              className="black-text-children"
              dangerouslySetInnerHTML={{ __html: this.props.description }}
            />
          </blockquote>
        </div>
      </div>
    );
  }
}
