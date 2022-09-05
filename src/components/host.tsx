import React, { Component, useCallback, useEffect, useState } from "react";
import axios from "axios";

const Host = () => {
  const [host, setHost] = useState({ host: "" });

  const getHost = useCallback(async () => {
    const res = await axios.get("/api/host");
    await setHost({ host: res.data.host });
  }, []);

  useEffect(() => {
    getHost();
  }, []);

  return (
    <div className="App">
      <h3>
        Welcome to <em>{host.host}</em> Blog!
      </h3>
    </div>
  );
};

export default Host;
