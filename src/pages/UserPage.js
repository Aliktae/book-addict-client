import React from 'react';
import "../style/user.css"

function ProfilePage(props) {
    return(
        <>
            <div className="content">
                <h1 className="profileTitle">Welcome back to BookAddict, "Username"</h1>
                <div className="row">
                    <div className="column">
                        <div className="favorites">
                            <h2>Favorite books list</h2>
                               <li>"Book Title", "Book Author"</li>
                            <li>"Book Title", "Book Author"</li>

                        </div>
                    </div>
                    <div className="column">
                        <div className="finished">
                            <h2>Finished books list</h2>
                                <li>"Book Title", "Book Author"</li>
                            <li>"Book Title", "Book Author"</li>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;