import { useAccount } from "wagmi";

import { Account, Connect, NetworkSwitcher } from "./components";
import { BaseTable } from "./components/Table/BaseTable";

export function App() {
  const { isConnected } = useAccount();

  return (
    <>
      <h1>Simple price monitor</h1>

      {/* <Connect />

      {isConnected && (
        <>
          <Account />
          <NetworkSwitcher />
        </>
      )} */}
      <BaseTable
        data={{
          headings: ["Name", "Price", "Address"],
          rows: [
            ["BTC", "30000", "0x12345"],
            ["ETH", "3000", "0x54321"],
          ],
        }}
      />
    </>
  );
}
