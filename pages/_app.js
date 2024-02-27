import '../styles/globals.css';
import { useEffect } from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.8/lottie_svg.min.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.8/lottie_svg.min.js" strategy="afterInteractive" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
