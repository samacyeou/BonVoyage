import { DashboardListProvider } from '@/contexts/DashboardListContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DashboardListProvider>
        <div id="modal" />
        <Component {...pageProps} />
      </DashboardListProvider>
    </>
  );
}
