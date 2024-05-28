// src/hooks/useFetch.js
import { useCallback, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (apiFunc) => {
    setLoading(true);
    try {
      const result = await apiFunc();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, error, loading, fetchData };
};

export default useFetch;
