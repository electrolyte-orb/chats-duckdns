import { Container } from '@components';

export default function Footer() {
	return (
		<div className="top-full absolute">
			<Container>
				<p className="font-bold text-black">
					Build Status:{' '}
					<img src="https://api.netlify.com/api/v1/badges/14d5cb9d-bf00-4b8f-80eb-34fc4fcb13a8/deploy-status" />
				</p>
			</Container>
		</div>
	);
}
