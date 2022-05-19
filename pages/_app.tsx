import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Navbar, Wrapper, Footer } from '@components';
import Head from 'next/head';
import { useState } from 'react';
import { User } from 'firebase/auth';

function MyApp({ Component, pageProps }: AppProps) {
	const [globalUser, setGlobalUser] = useState<User | null>(null);
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
				<Navbar globalUser={globalUser} />
				<Component {...pageProps} setGlobalUser={setGlobalUser} />
				<Footer />
			</Wrapper>
		</>
	);
}

export default MyApp;
