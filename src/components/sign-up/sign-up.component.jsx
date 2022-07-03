

import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.util";
import { FormInput } from "../form-input/form-input.component";
import { Button } from "../button/button.component";
import './sign-up.styles.scss'

const defaultConstructor = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUp = () => {
    const [ formFields, setformFields ] = useState(defaultConstructor);
    const { displayName, email, password, confirmPassword} = formFields;

    const handleSubmit = (event) => {
        event.preventDefault();

        if(confirmPassword !== password) {
            alert("Password does not match");
            return;
        }

        createAuthUserWithEmailAndPassword(email,password)
        .then((response)  => {
            console.log(response);
            createUserDocumentFromAuth(response.user,{ displayName })
            })
        .catch(error => {
            if(error.code === "auth/email-already-in-use") alert("Email sudah ada");
            console.log(error.code)});
        
        setformFields(defaultConstructor);
        


    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setformFields({
            ...formFields,
            [name]: value
        })
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={handleSubmit}>
            <FormInput
            label={"Display Name"}
            type="text" required 
            onChange={handleChange} 
            name="displayName" 
            value={displayName}
            />

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

            <FormInput
            label="Confirm Password"
             type="password" required
             onChange={handleChange} 
             name="confirmPassword" 
             value={confirmPassword}
            />
            <Button type='submit'>Sign In</Button>
            </form>
        </div>
    )
}

export default SignUp;