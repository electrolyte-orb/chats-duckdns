import { Container } from '@components';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	const router = useRouter();

	return router.asPath === '/chat' ? null : (
		<div className="bg-gray-900 text-white py-4">
			<Container>
				<div className="flex">
					<Image src="/Union.svg" width={34.43} height={22}></Image>
					<span className="ml-2 tracking-tight">Duck</span>
				</div>
				<div className="mt-6">
					Open Open Source Software by
					<br />
					<Link href="https://github.com/electrolyte-orb/">
						<span className="text-blue-500">Github/electrolyte-orb</span>
					</Link>
				</div>
				<div className="mt-6">Under MIT License</div>
				<div className="text-xs font-medium mt-4 text-gray-400">
					Google, AWS and Netlify are properties of their respective owners.
				</div>

				<div className="mt-6 mx-auto w-1/2 flex items-center text-xs font-medium text-center px-4 py-2 border border-white rounded-xl">
					All systems Normal
					<div className="h-2 w-2 rounded-full bg-green-500 ml-auto relative before:absolute before:h-3 before:w-3 before:rounded-full before:bg-green-500 before:bg-opacity-50 before:-top-0.5 before:-left-0.5"></div>
				</div>
			</Container>
		</div>
	);
}
