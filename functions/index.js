

const functions = require("firebase-functions");


const express = require('express')
const cors = require('cors')

const stripe = require('stripe')('sk_test_51Hb4NHGTHSdeCqCwrEbf9Z817VVIfzWOd3Xe0tfek1ohkn7VUj3yG54NuoWA9Y0AyznPQ80apLzHCAZO74pUmBeb00zFjqnDoZ')


// API



// App config
const app = express()


// middleware
app.use(cors({ origin: true }))
app.use( express.json())

// API routes
app.get('/', ( req, res) => res.status(200).send("hello") )


app.post('/payments/create', async (req, res) => {

    const total = req.query.total;

    console.log('Payment Received BOOM >>>>>', total);
  
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    })
 
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
    

})


// Listen 
exports.api = functions.https.onRequest(app)


// http://localhost:5001/clone-3ed8f/us-central1/api

