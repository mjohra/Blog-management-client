import axios from "axios";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);


    // sign in with google button click 
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // log in with google provider
    const handleGoogleLogin = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                handleLoginUserStore(result?.user?.displayName, result?.user?.email, result?.user?.photoURL);
                setUser(result.user);
                const redirect_url = location?.state?.from || '/';
                navigate(redirect_url);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };


    // register a new user using form create
    const handleRegisterNewUser = (email, password, name, navigate) => {
        console.log(email, password, name, navigate);
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setError('');
                setUser(result.user);
                const newUser = { email, displayName: name };
                setUser(newUser);
                // update user when successfully created an account
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    handleStoreUserData(result?.user?.displayName, result?.user?.email, result?.user?.photoURL);
                }).catch((error) => {
                    setError(error.message);
                });
                navigate('/');
                // store user to database 
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    };


    // log in a existing user 
    const handleUserLogin = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                const redirect_url = location?.state?.from || '/';
                handleLoginUserStore(result.user.displayName, result.user.email, result?.user?.photoURL);
                navigate(redirect_url);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // log out when button click 
    const handleLogOut = () => {
        setIsLoading(true);
        localStorage.removeItem("AdminLogIn");
        signOut(auth)
            .then((result) => {
                setUser({});
            })
            .finally(() => setIsLoading(false));

    };

    // always keep user update profile
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])


    //store user data to server (mongoDb)
    const handleStoreUserData = (name, email, photo) => {
        let photoURL ;
        photo ? photoURL = photo : photoURL = 'https://i.ibb.co/jwLpZMr/user-profile.png';
        const userInfo = { name, email , photoURL};
        console.log(userInfo);
        axios.post('https://shielded-meadow-42528.herokuapp.com/users', userInfo)
            .then(res => {
                if (res.data.insertedId) {
                    // alert('User Successfully store');
                }
            })
    }

    // handle store user login or google login data 
    const handleLoginUserStore = (name, email, photo) => {
        let photoURL;
        photo ? photoURL = photo : photoURL = 'https://i.ibb.co/jwLpZMr/user-profile.png';
        const userInfo = { name, email , photoURL};
        fetch('https://shielded-meadow-42528.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // console.log(data);
                    // alert('New user Added');
                }
            })
    }
    //admin check  https://shielded-meadow-42528.herokuapp.com/users
  useEffect(() => {
    fetch(`https://shielded-meadow-42528.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdmin(data.admin);
        console.log(data.admin);
        if(data.admin){
          localStorage.setItem("AdminLogIn", true);
        }
        console.log(admin)
        
      });
  }, [user.email]);


    return {
        handleGoogleLogin,
        handleRegisterNewUser,
        handleUserLogin,
        handleLogOut,
        user,
        admin,
        setUser,
        isLoading,
        setIsLoading,
        error,
        setError,
    }

};

export default useFirebase;