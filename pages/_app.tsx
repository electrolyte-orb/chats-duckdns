import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Navbar, Wrapper, Footer } from '@components';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
			</Head>
			<Wrapper>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</Wrapper>
		</>
	);
}

export default MyApp;
