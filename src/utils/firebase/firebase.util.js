import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore,
         doc,
         getDoc,
         setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAXuEzWD-uKhAT4BymKn0N1IiCjU36eEwE",
    authDomain: "crwn-clothing-db-32ada.firebaseapp.com",
    projectId: "crwn-clothing-db-32ada",
    storageBucket: "crwn-clothing-db-32ada.appspot.com",
    messagingSenderId: "438529573680",
    appId: "1:438529573680:web:9f2e21301bb33bdd80bef5"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGoogleAccount = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
      } catch(e)  {
        console.log("error creating this user",e.message);
      }
    } 


  }