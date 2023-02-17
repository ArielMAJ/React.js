import React from "react";
import DaytimeEnum from "../enums/daytimeEnum";

function message_obj(timeOfDay) {
  const message_moments = [
    { text: "Good morning", style_color: "red" },
    { text: "Good afternoon", style_color: "green" },
    { text: "Good evening", style_color: "blue" },
  ];
  const message = {};

  console.log(timeOfDay);
  message.text = message_moments[timeOfDay].text;
  message.style = {
    color: message_moments[timeOfDay].style_color,
    borderBottomColor: message_moments[timeOfDay].style_color,
  };
  return message;
}

function Heading() {
  const current_hour = new Date().getHours();

  let message;
  if (current_hour >= 18 || current_hour <= 4) {
    console.log(DaytimeEnum.Night);
    message = message_obj(DaytimeEnum.Night);
  } else if (current_hour >= 12) {
    console.log(DaytimeEnum.Afternoon);
    message = message_obj(DaytimeEnum.Afternoon);
  } else {
    console.log(DaytimeEnum.Morning);
    message = message_obj(DaytimeEnum.Morning);
  }
  return (
    <h1 className="heading" style={message.style}>
      {message.text}
    </h1>
  );
}

export default Heading;
