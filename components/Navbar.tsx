import Link from 'next/link';
import CogIcon from '@heroicons/react/solid/CogIcon';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'lib/firebase';

export default function Navbar() {
	const [user] = useAuthState(auth);

	return (
		<div className="sticky top-0 flex items-center max-w-screen z-30 bg-gray-500 bg-opacity-30 backdrop-blur border-b-2 border-gray-600 h-16">
			<div className="container mx-auto p-4 flex items-center">
				<Link href="/">
					<div className="font-bold text-white">
						<span className="text-yellow-500">Ducks</span> Chat
					</div>
				</Link>
				<div className="ml-auto flex items-center">
					{user && (
						<Link href="/account">
							<button className="text-white text-sm flex items-center font-medium p-1">
								<CogIcon className="h-5 inline-block" />
							</button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
