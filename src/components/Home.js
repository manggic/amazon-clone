

import React from 'react'
import "./Home.css"
import Product from './Product'
import { Redirect } from 'react-router-dom'
import { useStateValue } from './StateProvider'


function Home() {

    const [{user}, dispatch ] =useStateValue()


//     if (!user?.email) {
//        return <Redirect to='/login' />
//    }


    return (
        <div className='home'>
            <div className='home__container'>
                <img  className='home__image'  src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JanART/Header1500x178_SEM.jpg' />
            {/* <Link to='/' >   <img  className='home__image' onClick={ goOnHomePage } src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JanART/Header1500x178_SEM.jpg' /></Link>    */}

                <div className='home__row'>
                    <Product id={ 1 } title='IPhone X' price={1000} 
                    image='https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg'  rating = {4} />
                    <Product id={ 2 } title='Guitar' price={700} 
                    image='https://i2.wp.com/acousticguitar.com/wp-content/uploads/2020/09/guild-guitar-giveaway-free-guitar.jpg?fit=1800%2C1084&ssl=1'  rating = {5} />
                    
                </div>
                <div className='home__row'>
                <Product  id={ 3 } title='Ipad' price={500} 
                    image='https://photos5.appleinsider.com/gallery/37446-70347-36455-67891--xl-xl.jpg'  rating = {3} />
                <Product id={ 4 } title='Headphone' price={600} 
                    image='https://images-na.ssl-images-amazon.com/images/I/71hAfZZk4uL._SL1500_.jpg'  rating = {4} />
                <Product id={ 5 } title='Speaker' price={300} 
                    image='https://momofilmfest.com/wp-content/uploads/2019/11/rode-podmic-best-microphones-for-podcasting.jpg'  rating = {3} />
                                        
                                        
                                        
                </div>
                <div className='home__row'>
                <Product id={ 6 } title='LED TV' price={800} 
                    image='https://cdn.mos.cms.futurecdn.net/78kzT5oZeDve55LifhMHZ3.jpg'  rating = {5} />
                    
                </div>
              </div>            
        </div>
    )
}

export default Home

