import React from 'react'
import LoadingGif from "../../assets/img/loading.gif"

function Loading() {
  return (
    <div className='loading'>
        <img src={LoadingGif} alt="Loading..." />
    </div>
  )
}

export default Loading