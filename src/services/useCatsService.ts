import { useEffect, useState } from "react";
import axios, { Canceler } from "axios";

interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

const useCatsService = (pageNumber: number, limit: number) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [cats, setCats] = useState<Cat[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel: Canceler;

    const API_BASE_URL = "https://api.thecatapi.com/v1/images/search";
    const limit = 8;

    axios({
      method: "GET",
      url: API_BASE_URL,
      params: {
        limit: limit,
        page: pageNumber,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        const catData = res.data as Cat[];
        setCats((prevCats) => [...prevCats, ...catData]);
        setHasMore(catData.length === limit);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
        setLoading(false);
      });

    return () => cancel && cancel();
  }, [pageNumber]);

  return { cats, hasMore, loading, error };
};

export default useCatsService;
