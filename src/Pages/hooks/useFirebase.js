import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const registerNewUser = (name, email, password, history) => {
        setLoading(true);

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

                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then()
                setLoading(false)
                history.replace("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                setError(error.message);
            })
            .finally(() => setLoading(false))
            ;
    }
    const loginUser = (email, password, history, location) => {
        setLoading(true);
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
            })
            .finally(() => setLoading(false))
            ;
    }
    const googleLogIn = (history, location) => {
        setLoading(true);
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

                const redirect_url = location?.state?.from || "/home";
                history.replace(redirect_url);
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false))
            ;
    }
    const logoutUser = () => {
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setLoading(false))
            ;
    }
    useEffect(() => {
        setLoading(true);
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
            setLoading(false);
        });
    }, [auth])
    return {
        user,
        registerNewUser,
        googleLogIn,
        logoutUser,
        loginUser,
        loading
    }
}
export default useFirebase;