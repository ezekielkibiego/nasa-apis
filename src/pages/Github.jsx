import React from 'react'
import useGithub from '../hooks/githubRepos'

export const Github = () => {
  const { githubData, loading, error } = useGithub();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Github Repositories</h1>
      <ul>
        {githubData?.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
            <p>Language: {repo.language}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
