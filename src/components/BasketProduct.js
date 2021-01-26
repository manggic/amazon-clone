


import React from 'react'
import './BasketProduct.css'
import { useStateValue } from './StateProvider'

function BasketProduct({ item }) {
    
    const [{basket}, dispatch ] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id :item.id
             })     
    }

    console.log('after removing from basket ---->', basket)

    return (
        <div className='basketproduct'>
            <img className='basketproduct__image' src={item.image} />
            <div className='basketproduct__right'>
                <p>{ item.title}</p>
                <strong>${ item.price}</strong>
                <p className='basketproduct__rating'>
                    {Array(item.rating).fill('*').map(star => <p>{star}</p> ) }
                </p>
                <button onClick={ removeFromBasket } className='basketproduct__button'>remove</button>
            </div>
        </div>
    )
}

export default BasketProduct


