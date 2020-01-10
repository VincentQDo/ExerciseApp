import React from "react";
import "./Generic.css";
import "../style/App.css";

class ExercisePage extends React.Component {
  state = {
    data: null,
    stateDataDescription: null,
    loading: true
  };
  async componentDidMount() {
    let url = "https://wger.de/api/v2/exerciseinfo/";
    let response = await fetch(url);
    let responseData = await response.json();

    while (responseData.next) {
      console.log(responseData);
      url = responseData.next;
      response = await fetch(url);
      responseData = await response.json();
    }

    this.setState({ loading: false, data: responseData });
    // map each item description into a div
    const dataDescription = this.state.data.results.map(item => (
      <div className="alert alert-success">{item.description}</div>
    ));
    this.setState({ stateDataDescription: dataDescription });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>{this.state.stateDataDescription}</div>
          </div>
        )}
      </div>
    );
  }
}

export default ExercisePage;
