import React from 'react'
import { BounceLoader, BarLoader, BeatLoader, CircleLoader,
         ClimbingBoxLoader, ClipLoader, ClockLoader , MoonLoader,
         PacmanLoader } from 'react-spinners'
import './/SpinnersComponent.css'
import { css } from '@emotion/core'

const loaderCSS = css`
    margin-top: 25px;
    margin-bottom: 25px;
`

export default function SpinnersComponent() {
    return (
        <div className="container">
            <BounceLoader css={loaderCSS} size={24} color='red' loading/>
            <BarLoader css={loaderCSS} size={48} color='orange' loading/>
            <BeatLoader css={loaderCSS} size={30} color='maroon' loading/>
            <CircleLoader css={loaderCSS} size={50} color='purple' loading/>
            <ClimbingBoxLoader css={loaderCSS} size={50} color='purple' loading/>
            <ClipLoader css={loaderCSS} size={35} color='green' loading/>
            <ClockLoader css={loaderCSS} size={40} color='pink' loading/>
            <MoonLoader css={loaderCSS} size={50} color='blue' loading/>
            <PacmanLoader css={loaderCSS} size={30} color='yellow' loading/>

        </div>
    )
}
