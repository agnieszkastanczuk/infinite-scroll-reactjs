import { useEffect, useState } from "react";
import axios, { Canceler } from "axios";

interface Artwork {
  id: number;
  title: string;
  artist_title: string;
  artist_display: string;
  date_display: string;
  image_id: string;
}

const useArtworksService = (pageNumber: number) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel: Canceler;

    const API_BASE_URL = "https://api.artic.edu/api/v1/artworks";
    const limit = 8;

    axios({
      method: "GET",
      url: API_BASE_URL,
      params: {
        fields:
          "id,title,artist_title,artist_display,date_display,medium_display,image_id",
        limit,
        page: pageNumber,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)), //to avoid unnecessary status updates for queries that are already out of date
    })
      .then((res) => {
        setArtworks((prevArtworks) => [...prevArtworks, ...res.data.data]);
        setHasMore(res.data.data.length === limit);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
        setLoading(false);
      });

    return () => cancel && cancel();
  }, [pageNumber]);

  return { artworks, hasMore, loading, error };
};

export default useArtworksService;
