import React, { useState, useEffect } from "react";

const ConnectionStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const changeStatusOnline = () => {
      setStatus(true);
    };

    const changeStatusOffline = () => {
      setStatus(false);
    };

    window.addEventListener("online", changeStatusOnline);
    window.addEventListener("offline", changeStatusOffline);

    return () => (
      window.removeEventListener("online", changeStatusOnline),
      window.removeEventListener("offline", changeStatusOffline)
    );
  }, []);

  return (
    <div className={status ? "status" : "status status_offline"}>
      {status ? "Online" : "Offline"}
    </div>
  );
};

export default ConnectionStatus;
