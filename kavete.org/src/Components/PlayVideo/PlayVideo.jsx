import React, { useRef } from 'react'
import './PlayVideo.css'

const PlayVideo = ({playVideo,setPlayVideo}) => {

    const player = useRef(null);

    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlayVideo(false);
    }
}
  return (
    <div className={`video-player ${playVideo?"":"hide"}`} ref={player} onClick={closePlayer}>
    <iframe width="90%"  height="90%" className="video" src="https://www.youtube.com/embed/mqr_wZxmQK8?si=33qA-5v6fxZg7AaT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
  )
}

export default PlayVideo