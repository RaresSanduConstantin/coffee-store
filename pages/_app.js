import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <footer>
        <p>2022 Coffee Stores</p>
      </footer>
    </>
  );
}

export default MyApp;
