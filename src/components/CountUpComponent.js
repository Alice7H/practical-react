import React from 'react';
import CountUp, { useCountUp } from 'react-countup';

export default function CountUpComponent() {

    const { countUp, start, pauseResume, reset, update } = useCountUp({
        duration: 5,
        end: 10000,
        startOnMount: false
    })

    return (
        <div>
            <h1>{countUp}</h1>
            <button onClick={start}> Start</button>
            <button onClick={pauseResume}> Pause/Resume</button>
            <button onClick={reset}> Reset</button>
            <button onClick={() => update(2000)}> Update to 2000</button>
            <br/>
            <CountUp end={100}/>
            <br/>
            <CountUp start={500} end={1000} duration={5.00}/>
            <br/>
            <CountUp end={1000} duration={5} prefix='R$' decimals={2} />
            <br/>
            <CountUp end={1000} duration={5} suffix='BRL' decimals={2} />
        </div>
    )
}
