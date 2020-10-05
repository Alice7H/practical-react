import React, { useState } from 'react';
import ReactModal from 'react-modal';

const customStyles = {
    overlay: {
        backgroundColor: 'grey',
    },
    content : {
        color: 'orange',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
}

ReactModal.setAppElement('#root')

export default function ModalComponent() {
    
    const [modalIsOpen, setIsOpen] = useState(false)
    
    return (
        <div>
             <button onClick={()=> setIsOpen(true)}>Open Modal</button>
             <ReactModal 
                isOpen={modalIsOpen} 
                shouldCloseOnEsc={false}
                shouldCloseOnOverlayClick={false}
                onRequestClose={ () => setIsOpen(false)}
                style={customStyles}
             >
                <h2>Modal title</h2>
                <p>Modal Body</p>
                <div>
                    <button onClick={ () => setIsOpen(false)}>Close Modal</button>
                </div>
             </ReactModal>
        </div>
    )
}
