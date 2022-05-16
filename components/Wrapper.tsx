import { ReactNode } from 'react';

export default function Wrapper({ children }: { children?: ReactNode }) {
	return (
		<div className="min-h-screen bg-black text-gray-300 flow-root">
			{children}
		</div>
	);
}
