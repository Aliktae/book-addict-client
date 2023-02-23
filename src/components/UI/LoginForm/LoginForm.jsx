import React from 'react';
import classes from "../../../style/login.module.css";

function LoginForm() {
    return (
        <div className={classes.center}>
            <h1>Login to your account</h1>
            <p>Welcome to BookAddict</p>
            <form>
                <div className={classes.textfield}>
                    <input type="text" required/>
                    <span/>
                    <label>Email</label>
                </div>
                <div className={classes.textfield}>
                    <input type="text" required/>
                    <span/>
                    <label>Password</label>
                </div>
                <div className={classes.pass}>
                    Forgot Password?
                </div>

                <input className={classes.loginButton} type="submit" value="Login"/>
                <div className={classes.register}>
                    Don’t have an account? <a className={classes.signup} href="/signup">Sign up</a>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;