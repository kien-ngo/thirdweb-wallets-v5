import Image from "next/image";
import { Inter } from "next/font/google";
import { ConnectButton } from "thirdweb/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex min-w-[100vw] min-h-[100dvh]">
      <div className="m-auto">
        <ConnectButton />
      </div>
    </div>
  );
}
