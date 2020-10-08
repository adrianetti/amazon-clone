const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')('sk_test_51HY1eHDEhAFtUiM55pe6qjJK7Av8LgIPnhGLj6N6AVHtTGc2skni2al9ey4RxFCj62jcgdcOWoHUApZJVfsYEkne00WRzehpjF')

/* BACKEND */

// API

// - App config

const app = express();

// - Middlewares

app.use(cors({ origin: true }))
app.use(express.json())

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received BOOM!', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(total), //subunits of the currency
        currency: 'usd',
    });

    // OK - CREATED

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,

    });
});


// - Listen command
exports.api = functions.https.onRequest(app)