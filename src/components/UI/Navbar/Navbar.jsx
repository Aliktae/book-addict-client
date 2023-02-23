import React from "react";
import classes from './Navbar.module.css'

function Navbar(){
    return (
        <header>
            <div className={classes.navbar}>
                <a className={classes.logo} href="/"><h5 className={classes.logo}>BookAddict</h5></a>
                <ul className={classes.navContent}>
                    <li><a href="/about">About</a></li>
                    <li><a href="/foryou">For You</a></li>
                    <li><a href="/celebrity">Celebrity Picks</a></li>
                    <li><a href="/readlist">Reading Lists</a></li>
                </ul>
                <a className="cta" href="/login">
                    <button>Login</button>
                </a>
                <a className="cta" href="/signup">
                    <button>Sign up</button>
                </a>
            </div>
        </header>
    )
}

export default Navbar