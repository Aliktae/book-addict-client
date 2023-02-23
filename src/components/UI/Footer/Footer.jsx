import React from "react";
import classes from "./Footer.module.css"

function Footer(){
    return (
        <footer>
        <div className={classes.footer}>
            <div className={classes.footerContent}>
                <a className={classes.footerLogo}><h5>BookAddict</h5></a>
                <div className={classes.footerServices}>
                    <div className={classes.footerTitle}>Features</div>
                    <div className={classes.footerList}>
                        <a href="/readlist"><p>Reading Lists</p></a>
                        <a href="/about"><p>About us</p></a>
                        <a href="#"><p>Art of Reading</p></a>
                    </div>
                </div>
                <div className={classes.footerContacts}>
                    <div className={classes.footerTitle}>Contacts</div>
                    <div className={classes.footerList}>
                        <p>Phone Number</p>
                        <p>Email</p>
                        <p>Instagram</p>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer