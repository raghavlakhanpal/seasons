import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import "./App.css";

class App extends React.Component {
  // Initializing State - Method 1

  // constructor(props) {
  // super(props);
  // this.state = { lat: null, errMessage: "" };}

  // Initializing State - Method 2
  state = { lattitude: null, errMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lattitude: position.coords.latitude }),
      (err) => this.setState({ errMessage: err.message })
    );
  }

  renderContent() {
    //Conditional rendering done in helper function instead of render function
    if (this.state.errMessage && !this.state.lattitude) {
      return <div>Error:{this.state.errMessage}</div>;
    }
    if (!this.state.errMessage && this.state.lattitude) {
      return <SeasonDisplay lat={this.state.lattitude} />;
    }
    return <Spinner message="Please allow location access" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
