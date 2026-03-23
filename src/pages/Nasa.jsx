import React from 'react'
import useAPOD from '../hooks/useAPOD';

function Nasa() {
  const { apodData, loading, error } = useAPOD();

  if (loading) return <div className="p-6 text-slate-600">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">Error: {error.message}</div>;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8">
      <div className="overflow-hidden rounded-3xl border border-amber-100 bg-linear-to-br from-amber-50 via-orange-50 to-sky-50 shadow-lg">
        <div className="grid grid-cols-1 gap-6 p-5 md:grid-cols-2 md:p-8">
          <div className="space-y-4">
            <p className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800">
              NASA APOD
            </p>
            <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl">
              Astronomy Picture of the Day
            </h1>
            <h2 className="text-xl font-semibold text-slate-800">{apodData.title}</h2>
            <p className="text-sm leading-7 text-slate-700 md:text-base">
              {apodData.explanation}
            </p>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white/70 p-3 shadow-sm backdrop-blur-sm">
            <img
              src={apodData.url}
              alt={apodData.title}
              className="h-full max-h-115 w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nasa