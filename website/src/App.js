import React from 'react'
import { Footer, Header, Navbar} from './components';
import { About, Blog, Navigation } from './containers';

const App = () => {
    return (
        <div>
            <Navigation />
            <Blog />
            <Footer />
        </div>
    )
}

export default App