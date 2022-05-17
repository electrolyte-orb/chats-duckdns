import { Container } from '@components';
import Head from 'next/head';

export default function Home() {
	return (
		<Container>
			<Head>
				<title>Chats Duck</title>
			</Head>
			<section className="relative mt-4">
				<h3 className="text-center text-sm font-medium tracking-widest">
					MESSAGING MADE EASY
				</h3>
				<h1 className="font-bold text-6xl text-white text-center tracking-tight my-4">
					Making Memories. Making{' '}
					<span className="text-yellow-500">Ducks!</span>
				</h1>
				<button className="w-full mt-6 p-2 bg-yellow-500 text-black rounded-lg text-sm font-medium">
					Get Ducky!
				</button>
			</section>
		</Container>
	);
}
