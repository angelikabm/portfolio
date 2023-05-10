import Navbar from '@component/components/Navbar';
import '@component/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      
    </>
  );
}