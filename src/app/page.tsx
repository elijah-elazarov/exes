import { LockIcon } from "@/components/LockIcon";
import { CheckIcon } from "@/components/CheckIcon";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-start pt-16 pb-24 px-4">
      {/* Background gradient effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00d4aa]/5 rounded-full blur-[128px]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#9b5de5]/5 rounded-full blur-[128px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
        {/* Powered by PumpSwap Badge */}
        <div className="badge-glow flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#00d4aa]/30 bg-[#00d4aa]/5 mb-10">
          <span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse" />
          <span className="text-sm font-medium text-[#00d4aa]">
            Powered by PumpSwap
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-center mb-6 tracking-tight">
          <span className="text-white">Stake </span>
          <span className="gradient-text">$EXEQ</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-center text-gray-400 mb-6">
          Hold 1M+ tokens. Stake and earn.{" "}
          <span className="text-[#00d4aa] font-medium">
            Real SOL rewards from trading fees.
          </span>
        </p>

        {/* Features */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-14">
          <Feature text="No lock period" />
          <Feature text="Claim anytime" />
          <Feature text="Native SOL" />
        </div>

        {/* Wallet Card */}
        <div className="card-gradient-border w-full max-w-md p-8 md:p-10">
          {/* Lock Icon */}
          <div className="flex justify-center mb-6">
            <div className="icon-glow w-20 h-20 rounded-full border-2 border-[#00d4aa] bg-[#0a0a0a] flex items-center justify-center">
              <LockIcon className="w-8 h-8 text-[#00d4aa]" />
            </div>
          </div>

          {/* Card Content */}
          <h2 className="text-2xl font-bold text-center text-white mb-4">
            Connect Your Wallet
          </h2>
          <p className="text-center text-gray-400 mb-6">
            Connect your Solana wallet to stake $EXEQ and earn SOL rewards from trading fees.
          </p>
          <p className="text-center text-gray-500 text-sm">
            Supports Phantom, Solflare, Coinbase, Ledger & more
          </p>
        </div>
      </div>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <CheckIcon className="w-4 h-4 text-[#00d4aa]" />
      <span className="text-gray-300 text-sm font-medium">{text}</span>
    </div>
  );
}
