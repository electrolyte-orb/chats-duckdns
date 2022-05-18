import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBMDjiD6DtnelEc1pUXtIEL60uhqstbhaU',
	authDomain: 'chat-duckdns-production.firebaseapp.com',
	projectId: 'chat-duckdns-production',
	storageBucket: 'chat-duckdns-production.appspot.com',
	messagingSenderId: '510623704188',
	appId: '1:510623704188:web:7bc5e30a63046615f3d5f9',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
