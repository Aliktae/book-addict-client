import React from 'react';
import Home from "../components/UI/Home/Home";
import "../style/style.css"

function Homepage(props) {
    return (
        <div className="Home">
            <>
                <img className="banner" src="images/lib2.jfif"/>

                <div className="content">
                    <h1>Join millions of happy readers.</h1>
                    <div className="row">
                        <div className="column">
                            <div className="hometext">
                                <p>If you are looking for something to read, you should to take our quiz to get personal
                                    recommendations.</p>
                            </div>
                            <button>Get Started</button>
                        </div>
                        <div className="column">
                            <div className={"homepic"}>
                                <img src="images/book1.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slider">
                    <h1>The best of XXI century</h1>
                    <div className="card">
                        <div className="card-content">
                            <img src="images/demian.jpg"/>
                        </div>
                        <div className="card-content">
                            <img src="images/dorian.jpg"/>
                        </div>
                        <div className="card-content">
                            <img src={"images/comrades.jpg"}/>
                        </div>
                        <div className="card-content">
                            <img src="images/alaska.jpg"/>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}

export default Homepage;