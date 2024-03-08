import { ConnectButton } from "thirdweb/react";

export default function Home() {
  return (
    <div className="flex min-w-[100vw] min-h-[100dvh]">
      <div className="m-auto">
        <ConnectButton />
      </div>
    </div>
  );
}
