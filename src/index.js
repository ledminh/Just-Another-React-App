import './style.css';

import { render } from 'react-dom';

import Header from './Header';

function App() {

    return (
        <>
            <Header/>
        </>
        
    );
}


render(<App />, document.querySelector("#container"));

