import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Navbar, Wrapper } from '@components';
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
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Wrapper>
				<Navbar />
				<Component {...pageProps} />
			</Wrapper>
		</>
	);
}

export default MyApp;
