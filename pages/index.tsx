import Head from 'next/head';

export default function Home() {
	return (
		<div className="p-4">
			<Head>
				<title>Chats Duck</title>
			</Head>

			<section className="mt-20">
				<h1 className="text-6xl text-white text-center font-bold tracking-tight leading-none">
					Seamless <br />
					Interaction
				</h1>
				<div className="text-white font-bold tracking-tight leading-none mt-3 text-lg text-center">
					Frictionless Experience
				</div>
			</section>
		</div>
	);
}
