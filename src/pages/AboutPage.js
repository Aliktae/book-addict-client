import React from 'react';
import "../style/about.css"

function AboutPage(props) {
    return (
        <>
            <div className="about-content">
                <img src="images/about.jpg"/>
                <h1 className="about-title">What is BookAddict?</h1>
            </div>

            <div className="why-bookaddict">
                <p>BookAddict is a multifunctional website, where you can get personal recommendations by taking a survey, find
                    interesting reading lists, explore about celebrities taste in books and so on. Here you can read an
                    information about new bestsellers, create your own reading lists.
                </p>
            </div>
        </>
);
}

export default AboutPage;