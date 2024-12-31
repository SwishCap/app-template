'use client';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { WagmiProvider } from 'wagmi';
import { base } from 'viem/chains';
import { NEXT_PUBLIC_CDP_API_KEY } from '../config';
import { useWagmiConfig } from '../wagmi';

type Props = { children: ReactNode };

const queryClient = new QueryClient();

function OnchainProviders({ children }: Props) {
  const wagmiConfig = useWagmiConfig();

  const baseConfig = {
    id: base.id,
    name: base.name,
    nativeCurrency: base.nativeCurrency,
    rpcUrls: base.rpcUrls,
    blockExplorers: base.blockExplorers
  };

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider apiKey={NEXT_PUBLIC_CDP_API_KEY} chain={baseConfig}>
          <RainbowKitProvider modalSize="compact">
            {children}
          </RainbowKitProvider>
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default OnchainProviders;
