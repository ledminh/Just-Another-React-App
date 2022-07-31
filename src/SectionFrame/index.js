import styled, {css} from 'styled-components';
import { useState } from 'react';

export const TITLE_VERT_CENTER = "SECTIONFRAME/TITLE_VERT_CENTER";
export const TITLE_HOR_CENTER = "SECTIONFRAME/TITLE_HOR_CENTER";

function SectionFrame ({title, titlePos, additionalStyle, children}) {
    const [show, setShow] = useState(true);

    return (
        <Wrapper
            show={show}
            additionalStyle={additionalStyle}
            >
            <CloseButton 
                onClick={() => setShow(false)}
                show={show}/>
            <Title
                titlePos={titlePos}
                onClick={() => setShow(true)}
                show={show}
                >
                    {title.toUpperCase()}
            </Title>
            <Body show={show}>
                {children}
            </Body>
        </Wrapper>
    )
}

export default SectionFrame;

const Wrapper = styled.section`
    
    z-index: 0;

    ${props => props.show && css`
        box-shadow: 0 0 7px black;
        background-color: #999393;
        z-index: 1000;
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

    ${
        props => props.titlePos === TITLE_VERT_CENTER ? css`
            top: calc(50% - 2.25rem);
        `: props.titlePos === TITLE_HOR_CENTER? css`
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
        `: ``
    }


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

    @media (max-width: 595px) {
        font-size: 3rem;
    }

    @media (max-width: 440px) {
        font-size: 2rem;
    }
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