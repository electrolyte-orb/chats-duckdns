import { Container } from '@components';
import { User } from 'firebase/auth';
import { useEffect } from 'react';

interface AccountProps {
	globalUser: User | null;
}

export default function Account({ globalUser }: AccountProps) {
	useEffect(() => {});
	return (
		<Container>
			<div className="min-h-screen">
				<h1 className="text-4xl font-bold text-white">Settings</h1>
				<section className="text-center">
					<img src="" alt="" />
				</section>
			</div>
		</Container>
	);
}
