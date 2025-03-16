import "./App.css";
import SendPayment from "./components/SendPayment";
import { Networks, useIsConnected, XRPLClient } from "@nice-xrpl/react-xrpl";
import { WalletAccountSender } from "./components/WalletAccountSender";
import { WalletAccountReceiver } from "./components/WalletAccountReceiver";
import ReceivePayment from "./components/ReceivePayment";
function App() {
  const isConnected = useIsConnected();

  return isConnected ? (
    <>
      <WalletAccountSender>
        <SendPayment />
      </WalletAccountSender>
      <WalletAccountReceiver>
        <ReceivePayment />
      </WalletAccountReceiver>
    </>
  ) : (
    <div></div>
  );
}

export default App;
