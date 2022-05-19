import { Container } from '@components';
import { auth } from 'lib/firebase';
import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	User,
} from 'firebase/auth';
import XCircleIcon from '@heroicons/react/solid/XCircleIcon';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function GetDucky({
	setGlobalUser,
}: {
	setGlobalUser: Dispatch<SetStateAction<User | null>>;
}) {
	const router = useRouter();
	const [error, setError] = useState<any>();
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setGlobalUser(user);
			setLoading(false);

			if (user) router.push('/chat');
		});

		return () => {
			unsubscribe();
		};
	}, []);

	async function handleSignIn() {
		setLoading(true);
		const provider = new GoogleAuthProvider();

		signInWithPopup(auth, provider)
			.catch((err) => {
				setError(err);
			})
			.finally(() => setLoading(false));
	}

	return (
		<Container>
			<div
				className={
					'min-h-screen ' + (loading ? 'relative grid place-items-center' : '')
				}
			>
				{loading ? (
					<div className="absolute top-52 h-36 w-36 bg-gray-800 border border-gray-600 rounded-full animate-pulse grid place-content-center">
						<img src="https://raw.githubusercontent.com/SamHerbert/SVG-Loaders/master/svg-loaders/ball-triangle.svg"></img>
					</div>
				) : (
					<>
						<h1 className="text-white font-bold text-5xl my-8">
							Login to <span className="text-yellow-500">continue.</span>
						</h1>
						<div className="font-mono italic text-sm p-4 rounded-lg my-16 bg-gradient-to-br from-transparent via-gray-900 to-transparent border border-gray-700">
							If you are building a web app, the easiest way to authenticate
							your users with Firebase using their Google Accounts is to handle
							the sign-in flow with the Firebase JavaScript SDK.
							<br />
							<div className="text-yellow-500 mt-2 font-bold text-right">
								Firebase
							</div>
						</div>
						<button
							onClick={handleSignIn}
							className="py-2 font-medium rounded-xl block w-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-yellow-500 transition bg-yellow-500 text-black"
						>
							Sign In With Google
						</button>
						{error && (
							<div className="bg-red-500 bg-opacity-10 border border-red-500 p-4 text-xs rounded-xl font-bold font-mono text-red-500 flex items-center mt-4">
								<XCircleIcon className="h-10 mr-4 animate-pulse" />
								An error occured: {new String(error)}
							</div>
						)}
					</>
				)}
			</div>
		</Container>
	);
}
