import { Container } from '@components';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

interface HomeProps {
	buildSHA: string;
}

export default function Home({ buildSHA }: HomeProps) {
	return (
		<Container>
			<Head>
				<title>Chats Duck</title>
			</Head>
			<section className="relative mt-4 min-h-screen">
				<h3 className="text-center text-sm font-medium tracking-widest">
					MESSAGING MADE EASY
				</h3>
				<h1 className="font-bold text-6xl text-white text-center tracking-tight my-4">
					Making Memories. Making{' '}
					<span className="text-yellow-500">Ducks!</span>
				</h1>
				<Link href="/get-ducky">
					<button className="w-full mt-6 p-2 bg-yellow-500 text-black rounded-lg text-sm font-medium">
						Get Ducky!
					</button>
				</Link>
			</section>
			<div>
				Build SHA:{' '}
				<span className="break-all bg-gray-800 block mt-2 p-2 rounded font-mono tracking-wide">
					{buildSHA}
				</span>
			</div>
		</Container>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	/*
	 ** For Development only
	 */
	if (process.env.NODE_ENV === 'development') {
		return {
			props: { buildSHA: 'Dev Mode 🚧' },
		};
	}

	const getSiteReq = await fetch(
		`https://api.netlify.com/api/v1/sites/${process.env.NETLIFY_SITE_ID}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.NETLIFY_ACCESS_TOKEN}`,
			},
		}
	);

	const getSite = await getSiteReq.json();
	const getBuildReq = await fetch(
		`https://api.netlify.com/api/v1/builds/${getSite.published_deploy.build_id}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.NETLIFY_ACCESS_TOKEN}`,
			},
		}
	);
	const getBuild = await getBuildReq.json();
	if (typeof getBuild.code === 'number') {
		return {
			props: {
				buildSHA: 'Not Configured :(',
			},
		};
	}
	const props: HomeProps = {
		buildSHA: getBuild.sha,
	};
	return {
		props,
	};
};
