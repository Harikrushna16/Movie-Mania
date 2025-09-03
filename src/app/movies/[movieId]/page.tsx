import React from 'react'

const MoviePage = async ({ params }: { params: Promise<{ movieId: number }> }) => {
    const { movieId } = await params;
  return (
    <div>This is a dynamic MoviePage: {movieId}</div>
  )
}

export default MoviePage