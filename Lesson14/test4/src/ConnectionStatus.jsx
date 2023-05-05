import React, { useState, useEffect } from "react";

const ConnectionStatus = () => {
  const [status, setStatus] = useState({ connection: "Online", stat: false });

  setStatus;

  useEffect(() => {
    const changeStatusOnline = () => {
      setStatus({ connection: "Online", stat: false });
    };

    const changeStatusOffline = () => {
      setStatus({ connection: "Offline", stat: true });
    };

    window.addEventListener("online", changeStatusOnline);
    window.addEventListener("offline", changeStatusOffline);

    return () => (
      window.removeEventListener("online", changeStatusOnline),
      window.removeEventListener("offline", changeStatusOffline)
    );
  }, []);

  //   console.log(1);

  return (
    <div className={status.stat ? "status status_offline" : "status"}>
      {status.connection}
    </div>
  );
};

export default ConnectionStatus;
