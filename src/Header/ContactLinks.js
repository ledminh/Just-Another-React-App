import { useState } from 'react';
import styled from 'styled-components';

const copyToClipboard = (text) => navigator.clipboard.writeText(text);

const useEmailHandle = () => {
    const [clicked, setClicked] = useState(false);

    const emailHandle = () => {
        copyToClipboard("minh.le@ledminh.dev");

        setClicked(true);

        setTimeout(() => setClicked(false), 2000);
    }

    const titleText = clicked? "Copied!" : "minh.le@ledminh.dev. Click me to copy";

    return [emailHandle, titleText];
}

const useToolTipVisibility = () => {
    const [visible, setVisible] = useState(false);

    const onMouseOver = () => setVisible(true);
    const onMouseOut = () => setVisible(false);

    return [visible, onMouseOver, onMouseOut];

}

function ContactLinks () {
    
    const [emailHandle, titleText] = useEmailHandle();
    const [visible, onMouseOver, onMouseOut] = useToolTipVisibility();


    return (
        <>
            <Wrapper>
                <Li><a href="https://www.linkedin.com/in/ledminh/"><i className="fa fa-linkedin"/></a></Li>
                <Li><a href="https://github.com/ledminh"><i className="fa fa-github"/></a></Li>
                <Li 
                    onClick={emailHandle}
                    >
                        <i
                            onFocus={onMouseOver}
                            onMouseOver={onMouseOver}
                            onBlur={onMouseOut}
                            onMouseOut={onMouseOut}                         
                            className="fa fa-envelope"
                        />
                </Li>
                
                <ToolTip visible={visible}>{titleText}</ToolTip>
            </Wrapper>
            
        </>
        
    );
}

export default ContactLinks;

const ToolTip = styled.li`
    position: absolute;

    bottom: 0px;

    font-size: .7rem;
    font-weight: 700;
    background-color: #121111;
    color: gray;
    padding: .3rem;
    border-radius: 20px;
    
    ${
        props => props.visible? `
        visibility: visible;
        `:
        `visibility: hidden;`
    }
`

const Wrapper = styled.ul`
    position: relative;
    list-style-type: none;

    margin-left: 7px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    
`

const Li = styled.li`
    margin-bottom: .5rem;
    text-align: center;
    cursor: pointer;
    i {
        font-size: 1.5rem;
        border-radius: 50%;
        padding: 0.3rem;

        background-color: #2e2b2b;
        color: gray;
    }
`