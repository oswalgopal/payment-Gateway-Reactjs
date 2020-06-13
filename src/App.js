import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [amount, setAmount] = useState(0);
    const openCheckout = () => {
        let options = {
            "key": "rzp_test_l4pVzgQPivO7t0",
            "amount": amount, // 2000 paise = INR 20, amount in paisa
            "name": "Merchant Name",
            "description": "Purchase Description",
            "image": "/your_logo.png",
            "handler": function (response){
                alert(response.razorpay_payment_id);
            },
            "prefill": {
                "name": "Harshil Mathur",
                "email": "harshil@razorpay.com"
            },
            "notes": {
                "address": "Hello World"
            },
            "theme": {
                "color": "#F37254"
            }
        };
        let rzp = window.Razorpay(options);
        rzp.open();
    }
  return (
    <div>
        <input type='text' onChange={(ev) => {setAmount(ev.target.value)}} />
        <button onClick={openCheckout}>Pay Rs. {amount/100}</button>
      </div>
    )
}

export default App;
