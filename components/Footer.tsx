import { Container } from '@components';
import { useRouter } from 'next/router';

export default function Footer() {
	const router = useRouter();

	return router.asPath === '/chat' || router.asPath === '/' ? null : (
		<div className="bg-gray-900">
			<Container>
				<div className="flex gap-3 font-bold">
					Build Status:{' '}
					<img src="https://api.netlify.com/api/v1/badges/14d5cb9d-bf00-4b8f-80eb-34fc4fcb13a8/deploy-status" />
				</div>
			</Container>
		</div>
	);
}
