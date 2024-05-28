// src/components/Health.js
import React, { useEffect } from "react";
import { checkHealth } from "../api/health";
import useFetch from "../hooks/useFetch";

const Health = () => {
  const { data, error, loading, fetchData } = useFetch();

  useEffect(() => {
    fetchData(checkHealth);
  }, [fetchData]);

  console.log(data);

  return (
    <div>
      <h1>
        {error
          ? "Error"
          : loading
          ? "Loading..."
          : data
          ? data.status
          : "No Data"}
      </h1>
    </div>
  );
};

export default Health;
