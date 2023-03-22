import React from "react";
import DaytimeEnum from "../enums/daytimeEnum";

interface Message {
  text: string;
  style: { color: string; borderBottomColor: string };
}

function message_obj(timeOfDay: DaytimeEnum): Message {
  const message_moments: { text: string; style_color: string }[] = [
    { text: "Good morning!", style_color: "red" },
    { text: "Good afternoon!", style_color: "green" },
    { text: "Good evening!", style_color: "blue" },
    { text: "Good night!", style_color: "gray" },
  ];

  const message: Message = {} as Message;

  console.log(timeOfDay);
  message.text = message_moments[timeOfDay].text;
  message.style = {
    color: message_moments[timeOfDay].style_color,
    borderBottomColor: message_moments[timeOfDay].style_color,
  };
  return message;
}

function Heading() {
  const current_hour: Number = new Date().getHours();

  let message;
  if (current_hour >= 22 || current_hour <= 4) {
    console.log(DaytimeEnum.Night);
    message = message_obj(DaytimeEnum.Night);
  } else if (current_hour >= 18) {
    console.log(DaytimeEnum.Evening);
    message = message_obj(DaytimeEnum.Evening);
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
