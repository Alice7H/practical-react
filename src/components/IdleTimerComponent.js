import React, { useState, useRef } from 'react'
import IdleTimer from 'react-idle-timer'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')

export default function IdleTimerComponent() {

    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const sessionTimeoutRef = useRef(null)
    const idleTimerRef = useRef(null)

    const onIdle = () => {
        console.log('User is idle')
        setModalIsOpen(true)
        sessionTimeoutRef.current = setTimeout(logOut, 5000)
    }

    const stayActive =() => {
        setModalIsOpen(false)
        clearTimeout(sessionTimeoutRef.current)
        console.log('User is active')
    }

    const logOut = () => {
        setModalIsOpen(false)
        setIsLoggedIn(false)
        console.log('User has logged out')
    }

    return (
        <div>
            { isLoggedIn ? <h2>Hello User123 </h2> : <h2> Hello Guest</h2>}
            <ReactModal isOpen={modalIsOpen}>
                <h2>You've been idle for a while!</h2>
                <p>You will be logged out soon</p>
                <div>
                    <button onClick={logOut}>Log me out</button>
                    <button onClick={stayActive}>Keep me signed in</button>
                </div>
            </ReactModal>

            <IdleTimer 
                ref={idleTimerRef} 
                timeout={5 * 1000} 
                onIdle={onIdle}
            ></IdleTimer>
        </div>
    )
}
