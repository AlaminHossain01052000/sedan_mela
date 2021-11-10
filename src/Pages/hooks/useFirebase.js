import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const registerNewUser = (name, email, password, history) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { displayName: name, email: email };
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                setError("");
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then()
                history.replace("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                setError(error.message);
            });
    }
    const loginUser = (email, password, history, location) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...

                setError("");
                const redirect_url = location?.state?.from || "/";
                history.push(redirect_url);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(error.message);
            });
    }
    const googleLogIn = (history, location) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setError("");
                const newUser = { displayName: result.user.displayName, email: result.user.email };
                console.log(result.user);
                fetch("http://localhost:5000/users", {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then()

                const redirect_url = location?.state?.from || "/";
                history.push(redirect_url);
            }).catch((error) => {
                setError(error.message);
            });
    }
    const logoutUser = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
                setUser(user);
            } else {
                // User is signed out
                // ...
                setUser({})
            }
        });
    }, [auth])
    return {
        user,
        registerNewUser,
        googleLogIn,
        logoutUser,
        loginUser
    }
}
export default useFirebase;