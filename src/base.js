import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAtkXWO3UlWoQx2xkpfECKnlYWHTTCvNP0",
	authDomain: "my-port-698b3.firebaseapp.com",
	databaseURL: "https://my-port-698b3.firebaseio.com",
	projectId: "my-port-698b3",
	storageBucket: "my-port-698b3.appspot.com",
	messagingSenderId: "18948149030",
	appId: "1:18948149030:web:54dc53124a0041de29fbe7",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
