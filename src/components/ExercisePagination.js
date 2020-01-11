import React, { Component } from "react";
// TODO need to acually implement the pagination (this is just the placeholder)
export default class ExercisePagination extends Component {
  render() {
    return (
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabindex="-1">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href={this.props.page}>
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
