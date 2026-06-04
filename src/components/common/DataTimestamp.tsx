"use client";

import { useEffect, useState } from "react";

interface DataTimestampProps {
  timestamp?: string | Date;
}

export default function DataTimestamp({ timestamp }: DataTimestampProps) {
  const [currentTime, setCurrentTime] = useState(
    timestamp ? new Date(timestamp) : new Date()
  );

  useEffect(() => {
    if (timestamp) return;

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, [timestamp]);

  const formattedDate = currentTime.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return <span>Data as of {formattedDate}</span>;
}
