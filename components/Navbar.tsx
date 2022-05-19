import { User } from 'firebase/auth';
import Link from 'next/link';

interface NavbarProps {
	globalUser: User | null;
}
export default function Navbar({ globalUser }: NavbarProps) {
	return (
		<div className="sticky top-0 flex items-center max-w-screen z-30 bg-gray-500 bg-opacity-30 backdrop-blur border-b-2 border-gray-600 h-16">
			<div className="container mx-auto p-4 flex">
				<Link href="/">
					<div className="font-bold text-white">
						<span className="text-yellow-500">Ducks</span> Chat
					</div>
				</Link>
				{globalUser && <div className="ml-auto text-green-500">Signed In</div>}
			</div>
		</div>
	);
}
