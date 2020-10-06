import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

export default function CreditCardComponent() {

    const [cvc, setCvc] = useState('')
    const [expiry, setExpiry] = useState('')
    const [focus, setFocus] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
  
    return (
        <div>
            <p>React Credit Cards </p>
            <Cards 
                cvc = {cvc}
                expiry = {expiry} 
                focused = {focus}
                name = {name}
                number = {number}
            />
            <br/>
            <form>
                <input type='number' 
                    name='number'
                    placeholder='Card number'
                    value={number} 
                    onChange={ e => setNumber(e.target.value)} 
                    onFocus={ e => setFocus(e.target.name)}
                />
                <input type='text' 
                    name='name'
                    placeholder='Name'
                    value={name} 
                    onChange={ e => setName(e.target.value)} 
                    onFocus={ e => setFocus(e.target.name)}
                />
                <input type='number' 
                    name='expiry'
                    placeholder='MM/YY Expiry'
                    value={expiry} 
                    onChange={ e => setExpiry(e.target.value)} 
                    onFocus={ e => setFocus(e.target.name)}
                />
                 <input type='number' 
                    name='cvc'
                    placeholder='CVC'
                    value={cvc} 
                    onChange={ e => setCvc(e.target.value)} 
                    onFocus={ e => setFocus(e.target.name)}
                />
            </form>
        </div>
    )
}
