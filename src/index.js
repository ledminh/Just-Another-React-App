import './style.css';

import { render } from 'react-dom';


import Header from './Header';
import { Helmet } from 'react-helmet';

function App() {

    return (
        <>
            <Helmet>
                <script src="https://kit.fontawesome.com/6a23bab7e7.js" crossOrigin="anonymous"></script>
                <title>LEDMINH DEV</title>
                <description>My coding home</description>
            </Helmet>
            <Header/>
        </>
        
    );
}


render(<App />, document.querySelector("#container"));

