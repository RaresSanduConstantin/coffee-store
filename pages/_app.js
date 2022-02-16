import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Link href='/'>
        <a>Go to main page</a>
      </Link>
    </>
  );
}

export default MyApp;
