import { Container } from '@components';
import Head from 'next/head';

export default function Home() {
	return (
		<Container>
			<Head>
				<title>Chats Duck</title>
			</Head>
			<section className="relative">
				<h1 className="font-bold text-6xl text-white text-center my-4">
					Making Memories. Making{' '}
					<span className="text-yellow-500">Ducks!</span>
				</h1>
				<button className="w-full mt-6 p-2 bg-yellow-500 text-black rounded-lg text-sm font-medium">
					Get Ducky!
				</button>
			</section>
			<section className="mt-8 grid grid-cols-2">
				<div>1</div>
				<div>1</div>
				<div>1</div>
				<div>1</div>
			</section>
		</Container>
	);
}
