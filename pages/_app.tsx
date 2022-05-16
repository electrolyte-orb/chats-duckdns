import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Navbar, Wrapper } from '@components';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				{
					// Add Inter
				}
			</Head>
			<Wrapper>
				<Navbar />
				<Component {...pageProps} />
			</Wrapper>
		</>
	);
}

export default MyApp;
