import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/home-page.css';

function Home() {

    return (
        <>
            <header className="header">
            </header>
            <section id="home" class="home">
                <h1>
                    we are coders <br />
                    we create great stuff
                </h1><br />
                <Link to='/dashboard'>Get Started</Link>
            </section>
        </>
    );
}

export default Home;
