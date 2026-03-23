import React from 'react'
import useAPOD from '../hooks/useAPOD';

function Nasa() {
  const { apodData, loading, error } = useAPOD();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Astronomy Picture of the Day</h1>
      <img src={apodData.url} alt={apodData.title} />
      <h2>{apodData.title}</h2>
      <p>{apodData.explanation}</p>
    </div>
  )
}

export default Nasa