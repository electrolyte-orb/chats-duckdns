import { Container, Loader } from '@components';
import { auth } from 'lib/firebase';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Link from 'next/link';
import ExternalLinkIcon from '@heroicons/react/outline/ExternalLinkIcon';
import LogoutIcon from '@heroicons/react/outline/LogoutIcon';
import TrashIcon from '@heroicons/react/outline/TrashIcon';
import { deleteUser, signOut } from 'firebase/auth';

export default function Account() {
	const [user, loading, error] = useAuthState(auth);
	const [externalError, setExternalError] = useState<any>();

	const router = useRouter();

	useEffect(() => {
		console.debug('[DEBUG]', user);
		if (loading === false && user === null) router.replace('/');
	}, [user, loading]);

	function handleSignOut() {
		signOut(auth).catch(setExternalError);
	}

	function handleDelete() {
		if (auth.currentUser) {
			deleteUser(auth.currentUser).catch(setExternalError);
		}
	}

	return (
		<Container>
			<div
				className={
					'min-h-screen' + (loading ? ' relative grid place-items-center' : '')
				}
			>
				{loading ? (
					<Loader />
				) : (
					<>
						<section className="my-4">
							<div className="text-center">
								<div className=" inline-grid h-32 w-32 bg-gray-900 rounded-full place-content-center ring ring-blue-500 ring-offset-4 ring-offset-black">
									<img src={user?.photoURL!} className="inline-block" />
								</div>
								<h1 className="text-4xl font-bold text-white mt-8">Settings</h1>
								<h3 className="mt-2 font-medium text-2xl text-white">
									{user?.displayName}
								</h3>
							</div>
							<div className="w-full h-[0.25px] bg-gray-500 my-8"></div>
							<div>
								<h1 className="text-lg font-bold text-white">
									We are not authorized to change Google Account settings.
								</h1>
								<Link href="https://myaccount.google.com/">
									<button className="bg-blue-500 rounded-xl p-4 flex justify-between items-center w-full text-white font-medium mt-4">
										Google Account settings
										<ExternalLinkIcon className="h-4" />
									</button>
								</Link>
								<h1 className="text-lg font-bold text-red-500 mt-8">
									Sign Out or Delete Account
								</h1>
								<div className="grid gap-4 grid-cols-2">
									<button
										onClick={handleSignOut}
										className="bg-gray-500 rounded-xl p-4 flex justify-between items-center w-full text-white font-medium mt-4"
									>
										Sign Out
										<LogoutIcon className="h-4" />
									</button>
									<button
										onClick={handleDelete}
										className="bg-red-500 rounded-xl p-4 flex justify-between items-center w-full text-white font-medium mt-4"
									>
										Delete Account
										<TrashIcon className="h-4" />
									</button>
								</div>
								{error && (
									<div className="bg-red-500 text-black p-4 rounded-lg mt-4">
										Error Occured: {error.message}
									</div>
								)}

								{externalError && (
									<div className="bg-red-500 text-black p-4 rounded-lg mt-4">
										External Error: {new String(externalError)}
									</div>
								)}
							</div>
						</section>
					</>
				)}
			</div>
		</Container>
	);
}
