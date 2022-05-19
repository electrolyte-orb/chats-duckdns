import { Container } from '@components';
import { auth } from 'lib/firebase';
import ExclamationIcon from '@heroicons/react/solid/ExclamationIcon';

export default function GetDucky() {
	function handleSignIn() {}
	return (
		<Container>
			<div className="min-h-screen">
				<h1 className="text-white font-bold text-5xl my-8">
					Login to <span className="text-yellow-500">continue.</span>
				</h1>
				<div className="bg-red-500 bg-opacity-10 border border-red-500 p-4 text-xs rounded-xl font-bold text-red-500 flex items-center">
					<ExclamationIcon className="h-6 mr-4" />
					This feature is broken.
					<br /> Please DO NOT SIGN IN.
				</div>
				<div className="font-mono italic text-sm p-4 rounded-lg my-16 bg-gradient-to-br from-transparent via-gray-900 to-transparent border border-gray-700">
					If you are building a web app, the easiest way to authenticate your
					users with Firebase using their Google Accounts is to handle the
					sign-in flow with the Firebase JavaScript SDK.
					<br />
					<div className="text-yellow-500 mt-2 font-bold text-right">
						Firebase
					</div>
				</div>
				<button
					onClick={handleSignIn}
					className="py-2 font-medium bg-yellow-500 text-black rounded-xl block w-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-yellow-500 transition"
				>
					Sign In With Google
				</button>
			</div>
		</Container>
	);
}
