import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signOut, updateProfile, onAuthStateChanged,  } from "firebase/auth";
import initializeFirebase from '../Pages/Registration/Firebase/firebase.init';


initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

   

    const auth = getAuth();
    
    //-----------------user registration--------------------
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');

        const newUser = {email, displayName: name};
        setUser(newUser);
        //sava data to database
        saveUser(email, name, 'POST');

        //set name to firebase
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
        }).catch((error) => {

        });
        history.push('/');
      })
      .catch((error) => {
        // const errorCode = error.code;
        setAuthError(error.message);
        // ..
      })
      .finally (() => setIsLoading(false));
    }

     //-----------------user Login--------------------
     const loginUser = (email, password, location, history) => {
        setIsLoading(true);  
          signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location?.state?.from || '/';
      history.push(destination);
      setAuthError('');
    })
    .catch((error) => {
      setAuthError(error.message);
    })
    .finally (() => setIsLoading(false));
      }

// observer user state
    useEffect( () => {
      const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser({});
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    }, [auth])

    const logOut = () => {
        setIsLoading(true);
          signOut(auth).then(() => {
              // Sign-out successful.
            }).catch((error) => {
              // An error happened.
            })
            .finally(() => setIsLoading(false));
      }


      const saveUser = (email, displayName, method) => {
          const user = {email, displayName};
          fetch('http://localhost:5000/users', {
              method: method,
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(user)
          })
          .then()
      }

    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logOut
    }
};

export default useFirebase;
