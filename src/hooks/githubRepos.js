import { useEffect, useState } from "react";
import { fetchGithubData } from "../services/githubService";

export default function useGithub() {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGithubData = async () => {
      setLoading(true);
      try {
        const data = await fetchGithubData();
        setGithubData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getGithubData();
  }, []);

  return { githubData, loading, error };
}