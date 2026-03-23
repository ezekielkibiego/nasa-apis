const BASE_URL = import.meta.env.VITE_NASA_API_URL;
const API_KEY = import.meta.env.VITE_NASA_API_KEY;

export async function fetchNasaData() {
  try { 
    const response = await fetch(`${BASE_URL}?api_key=${API_KEY}`); 
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); 
    return data; 
  } catch (error) {
    console.error('Error fetching NASA data:', error);
    throw error; 
  }
}



