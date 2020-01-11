import React from "react";
import "./Generic.css";
import "../style/App.css";
import "./ExercisePage.css";
import ExercisePagination from "./ExercisePagination";
import ExerciseCard from "./ExerciseCard";
//TODO NEED TO REAFACTOR THIS FILE ASAP (IT LOOKS HORRENDOUS)
class ExercisePage extends React.Component {
  state = {
    data: null,
    stateDataDescription: null,
    loading: true
  };

  //? async and await are new topics need to learn more, also promises are new need to learn that too
  //* componentDidMount is here to get rid of an error (need to learn more about what it does)
  async componentDidMount() {
    // using let instead of const to allow the data to change in the while loop below
    //TODO need to figure out a way to not repeat commands again in the while loop below
    let url = "https://wger.de/api/v2/exercise/?status=2&language=2";
    let response = await fetch(url);
    let responseData = await response.json();
    // while looop to loop through all the pages of the API
    //TODO add pagination to the page someshow to easy navigation through api data, maybe download data to a json?
    // while (responseData.next) {
    //   console.log(responseData);
    //   url = responseData.next;
    //   response = await fetch(url);
    //   responseData = await response.json();
    // }

    this.setState({ loading: false, data: responseData });
    // map each item description into a div
    const dataDescription = this.state.data.results.map(item => {
      console.log(typeof item.description);
      console.log(item.description);
      return (
        <div>
          {/* <div
            className="alert alert-success"
            dangerouslySetInnerHTML={{ __html: item.description }}
          /> */}
          <ExerciseCard description={item.description} name={item.name} />
        </div>
      );
    });
    this.setState({ stateDataDescription: dataDescription });
  }

  render() {
    return (
      <div className="excercise-page">
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>{this.state.stateDataDescription}</div>
            <ExercisePagination />
          </div>
        )}
      </div>
    );
  }
}

export default ExercisePage;
