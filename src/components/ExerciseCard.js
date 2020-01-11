import React, { Component } from "react";

export default class ExerciseCard extends Component {
  render() {
    const style = { width: "18rem" };
    return (
      <div className="card" style={style}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5
            className="card-title"
            dangerouslySetInnerHTML={{ __html: this.props.name }}
          ></h5>
          <p
            className="card-text"
            dangerouslySetInnerHTML={{ __html: this.props.description }}
          />
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
