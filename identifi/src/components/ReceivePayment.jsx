import React from "react";
import { useBalance } from "@nice-xrpl/react-xrpl";

export default function ReceivePayment() {
  const balance = useBalance();
  return (
    <div className="container">
      <div>Hello Bob!</div>
      <div>Balance: {balance}</div>
    </div>
  );
}
