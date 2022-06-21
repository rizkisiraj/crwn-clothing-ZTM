import { signInWithGoogleAccount, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util'

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGoogleAccount();
        createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <h1>Sign in</h1>
        </div>
    )
}

export default SignIn;