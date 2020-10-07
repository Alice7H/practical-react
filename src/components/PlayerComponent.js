import React from 'react'
import ReactPlayer from 'react-player'
import './PlayerComponent.css'

export default function PlayerComponent() {
    // const url = 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
    const url = 'https://www.twitch.tv/videos/743918774?t=4h1m50s'
    return (
        <div className='container'>
            <ReactPlayer 
                width='480px' 
                height='240px' 
                controls 
                url={url}
                onReady={ () => console.log('onReady callback')} 
                onStart={ () => console.log('onStart callback')} 
                onPause={ () => console.log('onPause callback')} 
                onEnded={ () => console.log('onEnded callback')} 
                onError={ () => console.log('onError callback')} 
            />
        </div>
    )
}
