import React, { Component } from "react";

export default class ExercisePagination extends Component {
  render() {
    return (
      <div>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href={this.props.page}>
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
