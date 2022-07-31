import './style.css';

import { render } from 'react-dom';

import styled from 'styled-components';

import Header from './Header';
import SectionFrame, {TITLE_VERT_CENTER, TITLE_HOR_CENTER} from './SectionFrame';

import { Helmet } from 'react-helmet';

import AboutMe, {AboutMeStyle} from './Sections/AboutMe';
import Projects, {ProjectsStyle} from './Sections/Projects';

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
                <Body>
                    <SectionFrame 
                        title="About Me"
                        titlePos={TITLE_VERT_CENTER}
                        additionalStyle={AboutMeStyle}
                        >
                            <AboutMe/>
                    </SectionFrame>

                    <SectionFrame 
                        title="Projects"
                        titlePos={TITLE_HOR_CENTER}
                        additionalStyle={ProjectsStyle}
                        >
                            <Projects/>
                    </SectionFrame>
                </Body>

            </Wrapper>
        </>
        
    );
}

const Wrapper  = styled.div`
    width: 95%;
    max-width: 1020px;
    margin: auto;
    
`

const Body = styled.div`
    position: relative;
    
    margin-top: 1rem;

`

render(<App />, document.querySelector("#container"));
