import React from 'react'
import {ToastContainer , toast, Zoom} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CustomToast = ({closeToast}) => {
    return (
        <div>
            Something went wrong!
            <button onClick={closeToast}>Close</button>
        </div>
    )
}

toast.configure()

export default function Toastify() {

    const notify = () => {
        toast('You have a default notification!') // default top-right 5 seconds
        // toast('Top left notification', { position: toast.POSITION.TOP_LEFT })
        // toast('Top center notification!', { position: toast.POSITION.TOP_CENTER })
        // toast('Top right notification!', { position: toast.POSITION.TOP_RIGHT })
        // toast('Bottom left notification!', { position: toast.POSITION.BOTTOM_LEFT })
        // toast('Bottom center notification!', { position: toast.POSITION.BOTTOM_CENTER })
        // toast('Bottom right notification!', { position: toast.POSITION.BOTTOM_RIGHT })
        toast.success('Success notification!', { 
            position: toast.POSITION.TOP_LEFT ,
            autoClose: 8000 // 8 seconds 
        })
        toast.info('Info notification!', { 
            position: toast.POSITION.TOP_CENTER,
            autoClose: false
         })
        toast.warn(<CustomToast/>, { 
            position: toast.POSITION.TOP_RIGHT,
         })
        toast.error('Error notification!', { 
            position: toast.POSITION.BOTTOM_LEFT,
            hideProgressBar: true,
            pauseOnHover: true,
            draggable: false
         })
        toast.dark('Dark notification!', { position: toast.POSITION.BOTTOM_CENTER })

    }
    return (
        <div>
            <button onClick={notify}>Notify!</button>
            <ToastContainer/>
        </div>
    )
}
