/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../../../config/firebase";
import {
	createUserWithEmailAndPassword,
	signOut,
	signInWithPopup,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";

const authContext = createContext();

export const useAuth = () => {
	const context = useContext(authContext);
	return context;
};

const authProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const signUp = async (email, password) =>
		await createUserWithEmailAndPassword(auth, email, password);

	const logIn = async (email, password) =>
		await signInWithEmailAndPassword(auth, email, password);

	const logOut = async () => await signOut(auth);

	const signInWithGoogle = async () =>
		await signInWithPopup(auth, googleProvider);

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log(user);
		});
	}, []);

	return (
		<authContext.Provider
			value={{ signUp, logOut, signInWithGoogle, logIn, user }}
		>
			{children}
		</authContext.Provider>
	);
};

export default authProvider;
