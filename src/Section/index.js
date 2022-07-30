import styled, {css} from 'styled-components';
import { useState } from 'react';


function Section ({title, additionalStyle}) {
    const [show, setShow] = useState(false);

    return (
        <Wrapper
            show={show}
            additionalStyle={additionalStyle}
            >
            <CloseButton 
                onClick={() => setShow(false)}
                show={show}/>
            <Title
                onClick={() => setShow(true)}
                show={show}
                >
                    {title.toUpperCase()}
            </Title>
            <Body show={show}>
            <p>
                I was a radiologist in Vietnam, but then I quit and moved to the U.S. to build my career in Computer Science. I got my bachelor&apos;s degree in Computer Science from San Jose State University in 2020.
            </p>
            <p>
                My passion is in Frontend Web Development. I taught myself JavaScript, CSS, and HTML at home. I am very comfortable with ReactJS. Currently, Currently, I am trying to gain a more profound understanding of vanilla JavaScript. My next plan would be to get to know UI/UX design.
            </p>
            <p>
                I also know C++, Java, MySQL, Linux, and a little bit of Verilog through various classes I took at school.
            </p>
            <p>
                I do not have much experience working as a developer in the U.S. However, I am eager to learn what I have not known yet. I built some projects in JavaScript to showcase my skills. You can see the complete list of my projects here: Github::My-Projects. This list will be updated regularly as I am still learning and practicing to improving my skill.
            </p>
            </Body>
        </Wrapper>
    )
}

export default Section;

const Wrapper = styled.section`
    border: 2px solid #756e6e;

    ${props => props.show && css`
        border: 2px solid #302e2e;
        background-color: #999393;
    `}

    border-radius: 20px;
    padding: .5rem;

    position: relative;

    ${
        props => props.additionalStyle? props.additionalStyle : ``
    }
`

const CloseButton = styled.button`
    position: absolute;
    top: .5rem;
    right: .5rem;

    width: .8rem;
    height: .8rem;

    border-radius: 50%;

    border: none;

    background-color: #9c9292;

    box-shadow: 0 0 3px black inset;

    :hover {
        box-shadow: 0 0 4px black inset, 0 0 3px white;
    }

    opacity: ${props => props.show? 1 : 0};

    transition: opacity .5s;
    
`;

const Title = styled.div`
    position: absolute;
    top: calc(50% - 2.25rem);

    font-size: 4.5rem;
    font-family: "Inter", sans-serif;

    color: #423F3F;

    opacity: .6;
    z-index: 200;

    ${props => props.show && css`
        opacity: .3;
        z-index: 100;
    `}
    

    :hover {
        opacity: 1;
    }

    cursor: pointer;

    
    transition: opacity .5s;
`

const Body = styled.div`
    position: relative;
    
    margin-right: .5rem;
    margin-top: .5rem;

    opacity: 0;
    z-index: 100;

    ${props => props.show && css`
        opacity: 1;
        z-index: 200;
    `}

    transition: opacity .5s;

`