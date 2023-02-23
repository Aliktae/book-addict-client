import React from 'react';
import classes from "../../../style/register.module.css"

function RegisterForm(props) {
    return (
        <div className={classes.center}>
            <h1>Welcome to BookAddict</h1>
            <p>Let’s create an account</p>
            <form>
                <div className={classes.textfield}>
                    <input type="text" required/>
                    <span></span>
                    <label>Full Name</label>
                </div>
                <div className={classes.textfield}>
                    <input type="text" required/>
                    <span></span>
                    <label>Email</label>
                </div>
                <div className={classes.textfield}>
                    <input type="text" required/>
                    <span></span>
                    <label>Create a password</label>
                </div>

                <input className={classes.loginButton} type="submit" value="Sign up"/>
                <div className={classes.register}>
                    Already have an account? <a className={classes.signup} href="/login">Login</a>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;