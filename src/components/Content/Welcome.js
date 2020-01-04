import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="jumbotron d-flex align-items-center">
      <div className="container text-center">
        <div className="row">
          <header className="col-sm">
            <h1>Get Stronger Together</h1>
            <h5>
              Things work out best for those who make the best of how things
              work out.
            </h5>
            <button className="btn btn-outline-warning">Get started</button>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
