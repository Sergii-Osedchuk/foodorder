import { useState, useEffect, useCallback } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || 'We have unexpectable message')
  }

  return resData;
}

export default function useHttp(url, config, initialValue) {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  function clearData() {
    setData(initialValue);
  }

  const sendRequest = useCallback(async function sendRequest(data) {
    setIsLoading(true);

    try {
      const resData = await sendHttpRequest(url, {...config, body: data});
      setData(resData);
    } catch(error) {
      setError(error.message || 'Something went wrong');
    }
    setIsLoading(false);
  }, [url, config]);

  useEffect(() => {
    if ((config && (config.method === 'GET' || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config])

  return {
    data,
    isLoading,
    error,
    sendRequest, 
    clearData
  }
}