import { signInWithGoogleAccount, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util';
import SignUp from '../../components/sign-up/sign-up.component';

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGoogleAccount();
        console.log(user)
        createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUp />
        </div>
    )
}

export default SignIn;