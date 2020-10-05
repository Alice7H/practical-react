// npm install react-icons --save
import React from 'react'
import { IconContext } from 'react-icons'
import { FaUser} from 'react-icons/fa'       // font awesome
import { MdFavorite } from 'react-icons/md'  // material design

export default function Icon() {
    return (
        <IconContext.Provider value={{color: 'gray', size: '5rem'}}>
            <div>
            <h3> Icon from react-icons:</h3>
            <p>
                {/* <FaUser color='#39D1F7' size='5rem'/> 
                <MdFavorite color='red' size='10rem'/>
                <FaUser color='#FA89B3' size='5rem'/> */}
                <FaUser/> 
                <MdFavorite color='red'/>
                <FaUser/>
            </p>
            </div>
        </IconContext.Provider>
    )
}
