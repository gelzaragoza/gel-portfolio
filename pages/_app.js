import '../styles/globals.css';
import { useEffect } from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Load lottie_svg.min.js script
    const lottieScript = document.createElement('script');
    lottieScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.8/lottie_svg.min.js';
    lottieScript.defer = true;
    document.body.appendChild(lottieScript);

    // Load particles.js script
    const particlesScript = document.createElement('script');
    particlesScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    particlesScript.defer = true;
    document.body.appendChild(particlesScript);

    return () => {
      document.body.removeChild(lottieScript);
      document.body.removeChild(particlesScript);
    };
  }, []);

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.8/lottie_svg.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" strategy="afterInteractive" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
