import React from "react";
import "./Generic.css";
import "../style/App.css";

class ExercisePage extends React.Component {
  state = {
    dataJson: null,
    stateDataDescription: null,
    loading: true
  };
  async componentDidMount() {
    const url = "https://wger.de/api/v2/exerciseinfo/";
    const response = await fetch(url);
    const responseData = await response.json();
    this.setState({ loading: false, data: responseData });
    const dataDescription = this.state.data.results.map(
      item => item.description
    );
    this.setState({ stateDataDescription: dataDescription });
    console.log(dataDescription);
    // this.setState({ data: dataDescription });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <div>{this.state.stateDataDescription}</div>
        )}
      </div>
    );
  }
}

export default ExercisePage;
