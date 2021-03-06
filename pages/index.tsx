import Head from 'next/head';
import Link from 'next/link';
import ChevronRightIcon from '@heroicons/react/outline/ChevronRightIcon';

export default function Home() {
	return (
		<div className="p-5">
			<Head>
				<title>Chats Duck</title>
			</Head>

			<section className="mt-20">
				<h1 className="text-6xl text-white text-center font-bold tracking-tight leading-none">
					Seamless <br />
					Interaction
				</h1>
				<div className="text-white font-bold tracking-tight leading-none mt-3 text-xl text-center">
					Frictionless Experience
				</div>
				<Link href="/get-ducky">
					<button className="leading-none mt-12 w-full flex items-center justify-center rounded-lg bg-white text-black p-4 text-base font-medium">
						Get Started
						<ChevronRightIcon className="h-4 w-4 inline-block ml-1 stroke-[2pt]" />
					</button>
				</Link>
			</section>
			<section className="mt-16">
				<div className="text-center">
					<div>
						<span className="text-white font-bold relative mt-28 h-6 w-6 inline-grid rounded-full text-xs leading-none place-items-center bg-gradient-to-r from-blue-700 to-blue-500">
							<span className="absolute -top-28 w-1 h-28 inline-block bg-gradient-to-b from-black to-blue-600"></span>
							1
						</span>

						<h2 className="text-white font-bold leading-normal mt-6 text-xl text-center">
							Uses Google{"'"}s Encryption <br /> Algorithm
						</h2>
						<p className="mt-6 text-left">
							Firebase Firestore encrypts your data with advanded encryption
							used by other Google Services.
						</p>
					</div>

					<div className="mt-8">
						<span className="text-white font-bold relative mt-28 h-6 w-6 inline-grid rounded-full text-xs leading-none place-items-center bg-gradient-to-r from-indigo-700 to-indigo-500">
							<span className="absolute -top-28 w-1 h-28 inline-block bg-gradient-to-b from-black to-indigo-600"></span>
							2
						</span>

						<h2 className="text-white font-bold leading-normal mt-6 text-xl text-center">
							Built on the shoulders of Open <br /> Source Softwares
						</h2>
						<p className="mt-6 text-left">
							OSS software are free and open source codes that powers almost
							anything that is electronic.
						</p>
					</div>

					<div className="mt-8">
						<span className="text-white font-bold relative mt-28 h-6 w-6 inline-grid rounded-full text-xs leading-none place-items-center bg-gradient-to-r from-purple-700 to-purple-500">
							<span className="absolute -top-28 w-1 h-28 inline-block bg-gradient-to-b from-black to-purple-600"></span>
							3
						</span>

						<h2 className="text-white font-bold leading-normal mt-6 text-xl text-center">
							Next.js with Netlify and AWS <br /> Lambda is the secret behing
							<br /> {'"'}Seamless Interaction{'"'}
						</h2>
						<p className="mt-6 text-left">
							Next.js supercharges React to its max. Netlify{"'"}s crazy fast
							servers are a breeze and AWS Lambda is irrefutable at any scale.
						</p>
					</div>
					<div className="mt-16">
						<p className="mt-6 text-left leading-snug text-white font-medium">
							There{"'"}s nothing to wait for:
						</p>
						<Link href="/get-ducky">
							<button className="leading-none mt-4 w-full flex items-center justify-center rounded-lg bg-white text-black p-4 text-base font-medium">
								Get Started
								<ChevronRightIcon className="h-4 w-4 inline-block ml-1 stroke-[2pt]" />
							</button>
						</Link>
					</div>
				</div>
			</section>

			<div className="h-[76px]"></div>
		</div>
	);
}
