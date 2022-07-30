import './style.css';

import { render } from 'react-dom';

import styled from 'styled-components';

import Header from './Header';
import SectionFrame from './SectionFrame';

import { Helmet } from 'react-helmet';
import AboutMe, {AboutMeStyle} from './Sections/AboutMe';

function App() {

    return (
        <>
            <Helmet>
                <script src="https://kit.fontawesome.com/6a23bab7e7.js" crossOrigin="anonymous"></script>
                <title>LEDMINH DEV</title>
                <description>My coding home</description>
            </Helmet>
            <Wrapper>
                <Header/>
                <SectionFrame 
                    title="About Me"
                    additionalStyle={AboutMeStyle}
                    >
                        <AboutMe/>
                </SectionFrame>
            </Wrapper>
        </>
        
    );
}

const Wrapper  = styled.div`
    width: 95%;
    max-width: 1020px;
    margin: auto;

    
`

render(<App />, document.querySelector("#container"));
