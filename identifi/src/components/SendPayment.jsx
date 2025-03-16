import React, { useState } from "react";
import { useBalance } from "@nice-xrpl/react-xrpl";
import "./SendPayment.css";

export default function SendPayment() {
  const [receiverUsername, setReceiverUsername] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // For demo, just log the form data
    console.log("Receiver:", receiverUsername);
    console.log("Amount:", amount);

    // If you had a backend API, here is where you'd send a request using fetch/axios, e.g.:
    fetch("http://127.0.0.1:5000/send-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        senderUsername: "alice",
        receiverUsername,
        amount,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful response
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));

    // Reset form fields
    setReceiverUsername("");
    setAmount("");
  };

  const balance = useBalance();
  return (
    <div className="container">
      {/* <Account address="rGjQV3z9hcHPv7zjxC9K74tqPFgzgimnQJ"> */}
      {/* <ShowBalance /> */}
      {/* </Account> */}
      <div>Balance {balance}</div>

      <h1>Money Transfer</h1>
      <div>Hello Alice</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="receiver">Receiver Username:</label>
        <input
          id="receiver"
          type="text"
          placeholder="Enter receiver username"
          value={receiverUsername}
          onChange={(e) => setReceiverUsername(e.target.value)}
        />

        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">Transfer</button>
      </form>
    </div>
  );
}
