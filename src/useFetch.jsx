import { useEffect, useState } from "react";

export function useFetch(url) {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [controller, setController] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setController(abortController);
    fetch(url, { signal: abortController.signal })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .finally(() => setLoading(false));

    return () => abortController.abort();
  }, []);

  const handlerCancelRequest = () => {
    if (controller) {
      controller.abort();
    }
  };

  return {
    users: users,
    loading: loading,
    handlerCancelRequest: handlerCancelRequest,
  };
}
