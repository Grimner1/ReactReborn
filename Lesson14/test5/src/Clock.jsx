import React, { useState, useEffect } from "react";
import moment from "moment";

const Clock = ({ location, offset }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [location, offset]);

  return (
    <div className="clock">
      <div className="clock__location">
        {location}
      </div>
      <div className="clock__time">
        {moment(time).utcOffset(offset).format("HH:mm:ss A")}
      </div>
    </div>
  );
};

export default Clock;
