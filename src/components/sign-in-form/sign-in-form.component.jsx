import { FormInput } from "../form-input/form-input.component";
import { signInWithGoogleAccount, createUserDocumentFromAuth, signAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.util";
import { Button } from "../button/button.component";
import { Fragment, useState, useContext } from "react";
import Swal from 'sweetalert2';
import './sign-in.styles.scss'

const defaultConstructor = {
    email: "",
    password: ""
}

export const SignInForm = () => {
    const [ formFields, setFormFields ] = useState(defaultConstructor);
    const { email, password } = formFields;
    
    const logGoogleUser = async () => {
        await signInWithGoogleAccount();
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({
            ...formFields,
            [name] : value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        signAuthUserWithEmailAndPassword(email,password)
        .catch(error => {
            if(error.code === 'auth/user-not-found') {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Account not found',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            } else if(error.code === 'auth/wrong-password') {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Wrong Password',
                    footer: '<a href="">Please re-enter your password</a>'
                })
            }
        })

        setFormFields(defaultConstructor);
        

    }

    return (
        <div className="sign-up-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
            <FormInput 
             label="Email"
             type="email" required
             onChange={handleChange} 
             name="email" 
             value={email}
            />

            <FormInput
            label="Password" 
            type="password" required
            onChange={handleChange} 
            name="password" 
            value={password}
            />

            <div className="buttons-container">
            <Button type="submit" buttonType="base">Sign In</Button>
            <Button onClick={logGoogleUser} type="button" buttonType="google">Google Sign In</Button>
            </div> 
            </form>
        </div>
    )
}