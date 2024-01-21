import React, { useState } from "react";

const CreditCard = () => {
    const [info, setInfo]=useState(
        {
            fullName:'',
            cardNumber: '',
            cardMonth:'',
            cardYear:'',
            cardCvv:'',
        });
        const hanleChangeForm = (e) =>{
            setInfo({
                ...info,[e.target.name]: e.target.value
            })
        }
  return (
    <div className="container">
      <form>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          maxLength={16}
          onChange={hanleChangeForm}
        />

        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          maxLength={16}
          onChange={hanleChangeForm}
        />

        <input
          type="text"
          name="cardMonth"
          placeholder="Card Month"
          maxLength={2}
          onChange={hanleChangeForm}
        />

        <input
          type="text"
          name="cardYear"
          placeholder="Card Year"
          maxLength={4}
          onChange={hanleChangeForm}
        />
        <input
          type="text"
          name="cardCvv"
          placeholder="Card CVV"
          maxLength={3}
          onChange={hanleChangeForm}
        />
      </form>
      <div className="cards">
      <div className="card1">
        <div className="elements">
          <h1>{info.fullName}</h1>
          <p>{info.cardNumber}</p>
          <span>{info.cardMonth}/{info.cardYear}</span>
        </div>
      </div>


      <div className="card1">
        <div className="elements">
          
          <span>{info.cardCvv}</span>
        </div>
      </div>
      </div>


    </div>
  );
};

export default CreditCard;
