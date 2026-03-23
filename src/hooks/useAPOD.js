import { useEffect, useState } from "react";
import { fetchNasaData } from "../services/nasaService";

export default function useAPOD() {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNasaData = async () => {
      setLoading(true);
      try {
        const data = await fetchNasaData();
        setApodData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getNasaData();
  }, []);

  return { apodData, loading, error };
}