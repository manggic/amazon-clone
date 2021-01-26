
import React from 'react'
import './SubTotal.css'
import { useHistory } from 'react-router-dom'

function SubTotal({ count, price }) {


    const history = useHistory()


    return (
        <div className='subtotal'>
            <div className='subtotal__head'>
            <strong>Subtotal ({count} items) : </strong>
            <strong>${ price }</strong>
            </div>
            <div className='subtotal__checkbox' >
                <input type='checkbox' /><p>This order contains a gift</p>
            </div>
            <button onClick={ e=> history.push('/payment')  } className='subtotal__btn'>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal
