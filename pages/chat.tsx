/**
 * Under Heavy development
 */

import { auth } from 'lib/firebase';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { ChatsList, Container, Loader } from '@components';

export default function Chat() {
	const router = useRouter();
	const [user, loading_auth] = useAuthState(auth);

	useEffect(() => {
		if (user == null && loading_auth == false) router.replace('/');
	}, [user, loading_auth]);

	return loading_auth ? (
		<div className="grid place-items-center">
			<Loader />
		</div>
	) : (
		<Container>
			<h1 className="py-2 text-white font-bold text-4xl">Hello</h1>
			{user && <ChatsList user={user} />}
		</Container>
	);
}
