import "./Checkout.scss";
import { useState } from "react";

const Checkout = () => {

  const [address,setAddress] =
  useState("");

  const [city,setCity] =
  useState("");

  const [state,setState] =
  useState("");

  const [pincode,setPincode] =
  useState("");

  const [mobile,setMobile] =
  useState("");

  const handleCheckout = () => {

    alert(
      "Proceeding to Payment"
    );

  };

  return (

    <div className="checkout-page">

      <h1>
        Delivery Address
      </h1>

      <div className="checkout-form">

        <input
          type="text"
          placeholder="Full Address"
          value={address}
          onChange={(e)=>
            setAddress(
              e.target.value
            )
          }
        />

        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e)=>
            setCity(
              e.target.value
            )
          }
        />

        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e)=>
            setState(
              e.target.value
            )
          }
        />

        <input
          type="text"
          placeholder="Pincode"
          value={pincode}
          onChange={(e)=>
            setPincode(
              e.target.value
            )
          }
        />

        <input
          type="text"
          placeholder="Mobile"
          value={mobile}
          onChange={(e)=>
            setMobile(
              e.target.value
            )
          }
        />

        <button
          onClick={
            handleCheckout
          }
        >
          Continue To Payment
        </button>

      </div>

    </div>

  );
};

export default Checkout;