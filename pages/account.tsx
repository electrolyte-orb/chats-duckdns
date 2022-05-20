import { Container, Loader } from '@components';
import { auth } from 'lib/firebase';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Account() {
	const [user, loading] = useAuthState(auth);
	const router = useRouter();

	useEffect(() => {
		if (loading === false && user === null) router.replace('/');
	}, [user]);

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
						<h1 className="text-4xl font-bold text-white">Settings</h1>
						<section className="text-center">
							<img src="" alt="" />
						</section>
					</>
				)}
			</div>
		</Container>
	);
}
