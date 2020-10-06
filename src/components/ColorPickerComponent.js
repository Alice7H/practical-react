import React, { useState } from 'react'
import { ChromePicker } from 'react-color'

export default function ColorPickerComponent() {

    const [color, setColor] = useState('#fff')
    const [showColorPicker, setShowColorPicker] = useState(false)

    return (
        <div>
            <button onClick={ () => setShowColorPicker(showColorPicker => !showColorPicker)}>{showColorPicker ? 'Close color picker' : 'Pick a color'}</button>
            {  showColorPicker &&  ( 
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                    <ChromePicker color={color} onChange={updatedColor => setColor(updatedColor.hex)} />
                </div>
                )}
            <h2> You picked {color}</h2>
        </div>
    )
}
