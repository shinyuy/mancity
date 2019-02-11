import React from 'react'
import Header from '../components/header,footer/Header';
import Footer from '../components/header,footer/Footer';

function Layout(props) {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;
