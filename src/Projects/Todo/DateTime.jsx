// This component handles displaying the current date and time, updating every second

import React, { useEffect, useState } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    // Set interval to update the date and time every second
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString(); // Get current date
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      }); // Get current time

      // Combine the date and time into a single string
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    // Clean up the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return <h2 className="date-time">{dateTime}</h2>;
};

export default DateTime;
