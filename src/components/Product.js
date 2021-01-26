





import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'


function Product({ id, title , rating,price, image }) {
     const [{basket }, dispatch] = useStateValue()

    const addToBasket = () => {
           //dispatch the item 
        let item = {
            id,
            title,
            rating,
            price,
            image
        }

        dispatch({
            type: 'ADD_TO_BASKET',
            item
        })

    }

    console.log('basket after dispatch ----->', basket)


    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill('*').map(star => <p>{star}</p> ) }
                </div>  
            </div>
            <img src= {  image } />
            <button onClick={ addToBasket } className='product__button'>Add to basket</button>
        </div>
    )
}

export default Product
