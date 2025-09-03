import React from 'react'

const TVShowPage = async ({ params }: { params: Promise<{ tv_showId: number }> }) => {
  const { tv_showId } = await params;
  return (
    <div>This is a dynamic TVShowPage: {tv_showId}</div>
  )
}

export default TVShowPage