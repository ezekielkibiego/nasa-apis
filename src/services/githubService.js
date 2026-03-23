const BASE_URL = import.meta.env.VITE_GITHUB_API_URL;
const TOKEN = import.meta.env.VITE_GITHUB_API_TOKEN;

export async function fetchGitHubData() {
  try { 
    const response = await fetch(`${BASE_URL}/user/repos`, {
      headers: {
        Authorization: `token ${TOKEN}`,
        Accept: 'application/vnd.github+json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); 
    return data; 
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    throw error; 
  }
}
