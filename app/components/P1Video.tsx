// @ts-nocheck

import Video from 'next-video'
import React from 'react'
import adamVid from './../../videos/Use_your_Video_with_Top_8_Doodles_Transition_FX_Green_Screen____by_Green_Pedia.mp4.json';


const P1Video = () => {
    return (
        <Video className="w-full absolute -z-50 h-full" test={true} autoPlay loop muted controls={false} playsInline src={adamVid} />

    )
}

export default P1Video