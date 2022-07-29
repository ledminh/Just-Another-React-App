import './style.css';

import { render } from 'react-dom';

import Logo from './Logo';

function App() {

    return <Logo />
}


render(<App />, document.querySelector("#container"));

