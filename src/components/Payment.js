import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import BasketProduct from "./BasketProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "./axios";
import { db } from "../firebase";

function Payment() {
  const history = useHistory();
  const [{ user, basket }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const calcTotalPrice = () =>
    basket?.reduce((amount, item) => amount + item.price, 0);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  //const cardElement = elements.getElement(CardElement);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${calcTotalPrice() * 100}`,
      });
      console.log("response data >>>>>>", response);
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS ------> ", clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      })
      .then((res) => {
        console.log("paymentIntent >>>>>", res);

        // db
        //       .collection('users')
        //       .doc(user?.uid)
        //       .collection('orders')
        //       .doc(paymentIntent.id)
        //     .set({
        //         basket: basket,
        //         amount: paymentIntent.amount,
        //         created: paymentIntent.created
        //   })

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
          empty: [],
        });

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h4>Delivery address</h4>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>React Lane</p>
            <p>Los Angelas, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h4>Review item and delivery</h4>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <BasketProduct item={item} />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h4>Stripe payment</h4>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <strong>Order Total : ${calcTotalPrice()}</strong>
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error & <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
