import React, { Component } from "react";

const getTime = (offset) => {
  const timeNowUTC = new Date(new Date().getTime() - 7200000);
  const correntTime = timeNowUTC.getTime() + offset * 3600000;

  return new Date(correntTime);
};

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };

    setInterval(() => {
      this.setState({
        date: getTime(this.props.offset),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.date.toString()}</div>
      </div>
    );
  }
}

// const Clock = (props) => {
//   const timeNowUTC = new Date(new Date().getTime() - 7200000);
//   console.log(timeNowUTC.getTime());
//   const correntTime = timeNowUTC.getTime() + props.offset * 3600000;

//   return (
//     <div className="clock">
//       <div className="clock__location">{props.location}</div>
//       <div className="clock__time">{this.state.date.toString()}</div>
//     </div>
//   );
// };

// const getTimeWithOffset = (offset) => {
//   const currentTime = new Date();
//   const utcOffset = currentTime.getTimezoneOffset() / 60;
//   return new Date(
//     currentTime.setHours(currentTime.getHours() + offset + utcOffset)
//   );
// };

export default Clock;
