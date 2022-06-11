import Link from 'next/link';
import CogIcon from '@heroicons/react/solid/CogIcon';
import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'lib/firebase';

export default function Navbar() {
	const [user] = useAuthState(auth);

	return (
		<div className="sticky top-0 flex items-center max-w-screen z-30 bg-black border-b border-gray-800 h-12">
			<div className="container mx-auto p-5 flex items-center">
				<Link href="/">
					<Image src="/Union.svg" width={34.43} height={22}></Image>
				</Link>
				<div className="text-white ml-2 tracking-tight">Duck</div>
				<div className="ml-auto flex items-center">
					{user && (
						<Link href="/account">
							<button className="text-white text-sm flex items-center font-medium p-1">
								<CogIcon className="h-4 inline-block" />
							</button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
