import React from "react";
import { Wallet } from "@nice-xrpl/react-xrpl";

export function WalletAccountSender({ children }) {
  return <Wallet seed="sEdTqv8vTfzLAi4BG1YLVDytxsnCBNr">{children}</Wallet>;
}
