import { ReactNode } from 'react';

export default function Container({ children }: { children?: ReactNode }) {
	return <div className="container mx-auto p-4">{children}</div>;
}
