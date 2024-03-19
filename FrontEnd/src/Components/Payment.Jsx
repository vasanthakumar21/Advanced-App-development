// import React, { useState } from 'react';
// import "./Payment.css"

// function Payment() {
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [cardNumber, setCardNumber] = useState('');
//   const [cardholderName, setCardholderName] = useState('');
//   const [cardDate, setCardDate] = useState('');
//   const [cvv, setCvv] = useState('');

//   const handlePaymentMethodChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const handleCardNumberChange = (e) => {
//     setCardNumber(e.target.value);
//   };

//   const handleCardholderNameChange = (e) => {
//     setCardholderName(e.target.value);
//   };

//   const handleCardDateChange = (e) => {
//     setCardDate(e.target.value);
//   };

//   const handleCvvChange = (e) => {
//     setCvv(e.target.value);
//   };

//   const handlePayment = () => {
//     // Handle payment logic here
//   };

//   return (
//    <div className='vv'> 
//     <main id='container'>
//       <aside id='info'>
//         <label htmlFor='paymentMethod'>Payment Method</label>
//         <select name='paymentMethod' value={paymentMethod} onChange={handlePaymentMethodChange}>
//           <option value=''>Select Payment Method</option>
//           <option value='Visa'>Visa</option>
//           <option value='MasterCard'>MasterCard</option>
//           <option value='Elo'>Elo</option>
//         </select>

//         <label htmlFor='cardNumber'>Credit Card Number</label>
//         <input type='text' name='cardNumber' value={cardNumber} onChange={handleCardNumberChange} />

//         <label htmlFor='cardholderName'>Cardholder Name</label>
//         <input type='text' name='cardholderName' value={cardholderName} onChange={handleCardholderNameChange} />

//         <label htmlFor='cardDate'>Expiration Date</label>
//         <input type='text' name='cardDate' value={cardDate} onChange={handleCardDateChange} />

//         <label htmlFor='cvv'>CVV</label>
//         <input type='text' name='cvv' value={cvv} onChange={handleCvvChange} />

//         <button id='makePayment' onClick={handlePayment}>MAKE A PAYMENT</button>
//       </aside>
//       <aside id='description'>
//         <h2>Original wayfarer classic</h2>
//         <h3>Green classic g-15</h3>
//         <img src='http://www.ray-ban.com/_repository/_resources/_collections/sun/RB4105/601/_default_500_300/601.png' alt='Sunglasses' />
//         <h1>$150</h1>
//         <button id='editOrder'>Edit the Order</button>
//       </aside>
//     </main>
//     </div>
//   );
// }

// export default Payment;
