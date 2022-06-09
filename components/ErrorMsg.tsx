import XCircleIcon from '@heroicons/react/solid/XCircleIcon';

interface ErrorMsgProps {
	error: any;
	flag?: string;
}

export default function ErrorMsg({ error, flag }: ErrorMsgProps) {
	return (
		<div className="bg-red-500 bg-opacity-10 border border-red-500 p-4 pl-12 text-xs rounded-xl font-bold font-mono text-red-500 mt-4 break-all relative">
			<XCircleIcon className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-6 h-5 inline-block animate-pulse" />
			<div>
				{flag || 'An error occured: '}: {new String(error)}
			</div>
		</div>
	);
}
