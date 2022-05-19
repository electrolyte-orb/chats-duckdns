import { User, signOut } from 'firebase/auth';
import { auth } from 'lib/firebase';
import Link from 'next/link';
import CogIcon from '@heroicons/react/solid/CogIcon';

interface NavbarProps {
	globalUser: User | null;
}
export default function Navbar({ globalUser }: NavbarProps) {
	async function handleSignOut() {
		await signOut(auth);
	}
	return (
		<div className="sticky top-0 flex items-center max-w-screen z-30 bg-gray-500 bg-opacity-30 backdrop-blur border-b-2 border-gray-600 h-16">
			<div className="container mx-auto p-4 flex items-center">
				<Link href="/">
					<div className="font-bold text-white">
						<span className="text-yellow-500">Ducks</span> Chat
					</div>
				</Link>
				<div className="ml-auto flex items-center">
					{globalUser && (
						<Link href="/account">
							<button
								onClick={handleSignOut}
								className="text-white text-sm flex items-center font-medium p-1"
							>
								<CogIcon className="h-5 inline-block" />
							</button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
