import React from 'react'
import './app.css';
import { Footer, Header, Navbar } from './components';
import { About, Blog, Navigation } from './containers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form } from 'bootstrap';


const App = () => {
    return (
        <div className='brasul'>
            <Navigation />
            <Blog />
            <Footer />
        </div>
    )
}

export default App