import axios from "axios";
const BASE_URL = import.meta.env.VITE_NASA_API_URL;
const API_KEY = import.meta.env.VITE_NASA_API_KEY;

export async function fetchNasaData() {
  try { 
    const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching NASA data:', error);
    throw error;
  }

}



