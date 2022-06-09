import { User } from 'firebase/auth';
import { limit, orderBy, query, where } from 'firebase/firestore';
import { chat_messagesRef } from 'lib/firebase';
import { useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import ErrorMsg from './ErrorMsg';

interface ChatsListProps {
	user: User;
}

export default function ChatsList({ user }: ChatsListProps) {
	const [globalMessages, loading, error] = useCollection(
		query(
			chat_messagesRef,
			where('receiver.email', '==', '*'),
			orderBy('createdAt', 'desc'),
			limit(30)
		)
	);

	useEffect(() => {
		console.log(globalMessages?.docs.map((doc) => doc.data()));
	}, [globalMessages]);

	return loading ? (
		<div>Loading Chats...</div>
	) : (
		<div className="break-words">
			{globalMessages ? (
				<div className="grid grid-cols-1">
					{globalMessages.docs.map((doc) => (
						<div key={doc.id} className="p-4 bg-gray-800 rounded-lg mt-4">
							<div className="text-white text-sm font-bold">
								{doc.data().sender.name}
							</div>
							<div className="mt-2">{doc.data().message}</div>
						</div>
					))}
				</div>
			) : (
				'Data Error'
			)}
			{error && <ErrorMsg error={error} />}
		</div>
	);
}
