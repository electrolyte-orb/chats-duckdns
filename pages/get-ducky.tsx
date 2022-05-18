import { Container } from '@components';
import { auth } from 'lib/firebase';
import ExclamationCircleIcon from '@heroicons/react/solid/ExclamationCircleIcon';

export default function GetDucky() {
	function handleSignIn() {}
	return (
		<Container>
			<div className="min-h-screen">
				<h1 className="text-white font-bold text-5xl my-8">
					Login to <span className="text-yellow-500">continue.</span>
				</h1>
				<div className="bg-red-500 p-4 text-sm rounded-xl text-black flex items-center">
					<ExclamationCircleIcon className="h-8 mr-4" />
					This feature is broken.
					<br /> Please DO NOT SIGN IN.
				</div>
				<div className="font-mono italic text-sm my-4">
					If you are building a web app, the easiest way to authenticate your
					users with Firebase using their Google Accounts is to handle the
					sign-in flow with the Firebase JavaScript SDK.
					<br />
					<div className="text-yellow-500 mt-2">Firebase</div>
				</div>
				<button
					onClick={handleSignIn}
					className="p-4 font-bold bg-yellow-500 text-black rounded-xl block w-full focus:ring-4 focus:ring-yellow-600 transition"
				>
					Sign In With Google
				</button>
			</div>
		</Container>
	);
}
