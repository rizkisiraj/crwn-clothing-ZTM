import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import { getFirestore,
         doc,
         getDoc,
         setDoc,
         collection,
         writeBatch,
         query,
         getDocs
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
  });

  export const auth = getAuth();
  export const signInWithGoogleAccount = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object)
    });
    
    await batch.commit();
    console.log("done");

  }

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
  
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => doc.data());
    // const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    //   const { title, items } = docSnapshot.data();
    //   acc[title.toLowerCase()] = items;
    //   return acc;
    // }, {});
  
    // return categoryMap;
  };

  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

  export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
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
          createdAt,
          ...additionalInfo
        });
      } catch(e)  {
        console.log("error creating this user",e.message);
      }
    } else {
      console.log(userSnapshot.data());
    }
    return userDocRef;
  }

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);