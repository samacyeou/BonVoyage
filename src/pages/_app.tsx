import '@/styles/globals.css';
import '@/styles/datePicker.css';
import 'react-datepicker/dist/react-datepicker.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div id="modal" />
      <Component {...pageProps} />
    </>
  );
}
