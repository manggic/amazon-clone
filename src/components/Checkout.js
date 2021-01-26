


import React from 'react'
import BasketProduct from './BasketProduct'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import SubTotal from './SubTotal'



function Checkout() {
     
    const [{basket}, dispatch ] = useStateValue()

    const calcTotalPrice = () => 
         
    basket?.reduce( (amount, item) => amount+item.price, 0  )
    
   
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='' />
                <div>
                    <h2 className='checkout__title'>
                        Your shopping Basket
                    </h2>
                    {basket.map( item => {
                       return <BasketProduct item={ item} />
                    }) }
                </div>
            </div>              
            <div className='checkout__right'>
                <SubTotal count={basket.length} price={ calcTotalPrice() } /> 
            </div>              
        </div>
    )
}

export default Checkout
