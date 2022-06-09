import { Container, Loader, ErrorMsg } from '@components';
import { auth } from 'lib/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import siginPopupImage from '../public/sign_in_popup.svg';

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
			<div className={loading ? 'relative grid place-items-center' : ''}>
				{loading ? (
					<Loader />
				) : (
					<>
						<div className="my-16">
							<Image src={siginPopupImage} layout="responsive"></Image>
						</div>

						<h1 className="text-white text-center text-[40px] font-bold tracking-tight leading-tight">
							Login
						</h1>

						<div className="mt-10 font-medium leading-normal tracking-normal">
							If you are building a web app, the easiest way to authenticate
							your users with Firebase using their Google Accounts is to handle
							the sign-in flow with the Firebase JavaScript SDK.
							<div className="text-right font-bold text-white italic">
								Firebase docs
							</div>
						</div>

						<button className="py-3 bg-white text-black font-medium rounded-xl block w-full mt-16 leading-none">
							Sign In With Google
						</button>
					</>
				)}
			</div>
			<div className="h-20"></div>
		</Container>
	);
}
