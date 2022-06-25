import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {

  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
    },
    (err) => {
      console.log(err);
    }
  );

  return <div>Location :</div>;
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
