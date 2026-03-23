import React from 'react'
import useGithub from '../hooks/githubRepos'

export const Github = () => {
  const { githubData, loading, error } = useGithub();

  if (loading) return <div className="p-6 text-slate-600">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">Error: {error.message}</div>;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">
        GitHub Repositories
      </h1>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {githubData?.map((repo) => (
          <li
            key={repo.id}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-sky-700 hover:underline"
            >
              {repo.name}
            </a>
            <p className="mt-2 text-slate-600">
              {repo.description || 'No description provided.'}
            </p>
            <p className="mt-3 text-sm font-medium text-slate-700">
              Language: {repo.language || 'Not specified'}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
