import './SeasonDisplay.css';
import React from "react";

//creating config objects to get rid of iterations
const seasonConfig = {
  winter: {
    text: "Burr its chilly!",
    iconName: "snowflake",
  },
  summer: {
    text: "Lets hit the Beach!",
    iconName: "sun",
  },
};

//function to calculate the season based on month and user location
function getSeason(lat, month) {
  //in date() function months count starts from 0
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth);

  // checking what season it is and rendering it in the return statement
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1> {text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
