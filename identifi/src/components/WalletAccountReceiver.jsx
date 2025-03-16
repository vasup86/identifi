import React from "react";
import { Wallet } from "@nice-xrpl/react-xrpl";

export function WalletAccountReceiver({ children }) {
  return <Wallet seed="sEdVk9n7ku3Sbrhak2iBe1gtUGAXxaa">{children}</Wallet>;
}
