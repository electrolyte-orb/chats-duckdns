import { Container, Loader, ErrorMsg } from '@components';
import { auth } from 'lib/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';

export default function GetDucky() {
	const [user, authLoading] = useAuthState(auth);
	const [error, setError] = useState<any>();
	const [loading, setLoading] = useState<boolean>(true);

	const router = useRouter();

	useEffect(() => {
		if (authLoading === false) {
			setLoading(false);
		}
	}, [authLoading]);

	useEffect(() => {
		if (user) {
			router.replace('/chat');
			setLoading(false);
		}
	}, [user]);

	async function handleSignIn() {
		setLoading(true);
		setError(null);

		const provider = new GoogleAuthProvider();
		const result = await signInWithPopup(auth, provider)
			.catch((err) => setError(err))
			.finally(() => {
				setLoading(false);
			});
		if (result) {
			router.replace('/chat');
		}
	}

	return (
		<Container>
			<div
				className={
					'min-h-screen ' + (loading ? 'relative grid place-items-center' : '')
				}
			>
				{loading ? (
					<Loader />
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
						{error && <ErrorMsg error={error} />}
					</>
				)}
			</div>
		</Container>
	);
}
