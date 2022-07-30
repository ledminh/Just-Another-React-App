import styled, {css} from 'styled-components';
import { useState } from 'react';


function SectionFrame ({title, additionalStyle, children}) {
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
                {children}
            </Body>
        </Wrapper>
    )
}

export default SectionFrame;

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