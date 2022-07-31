import styled, {css} from 'styled-components';

import { useState } from 'react';

function Project ({backgroundImg, title, description, githubLink, demoLink}) {
    const [hover, setHover] = useState(false);

    return (
        <Wrapper
            hover={hover}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            >
            <BackgroundImage 
                backgroundImg={backgroundImg}
                hover={hover}/>
            <Title
                hover={hover}
                >
                {title.toUpperCase()}
            </Title>
            <Description hover={hover}>
                {description}
            </Description>
            <Links
                hover={hover}
            >
                <Li><a href={githubLink}>GITHUB</a></Li>
                <Li><a href={demoLink}>DEMO</a></Li>
            </Links>
        </Wrapper>
    )
}

export default Project;

const Wrapper = styled.div`
    position: relative;
    
    border-radius: 20px;

    overflow: hidden;

    opacity: .8;

    ${
        props => props.hover && css`
            opacity: 1;
            box-shadow: 0 0 7px black;
        `
    }
`

const BackgroundImage = styled.div`
    position: absolute;
    
    width: 100%;
    height: 100%;

    background: url(${props => props.backgroundImg}) no-repeat center;
    background-size: 100%;

    opacity: .4;
    z-index: -1;

    ${
        props => props.hover && css`
            opacity: .6;
        `
    }
`

const Title = styled.div`
    background-color: rgba(56, 48, 48, .7);
    color: white;
    font-weight: 800;
    text-align: center;
    height: 2rem;
    display: grid;
    align-content: center;

    ${
        props => props.hover && css`
            background-color: rgb(56, 48, 48);
        `
    }
`

const Description = styled.div`
    font-size: .8rem;
    background-color: rgba(56, 48, 48, .5);

    margin: .5rem;  
    padding: .3rem;
    border-radius: 20px;

    color: white;

    text-align: center;

    ${
        props => props.hover && css`
            background-color: rgba(56, 48, 48, .8);
        `
    }
`

const Links = styled.ul`
    list-style-type: none;

    display: flex;
    justify-content: space-around;
    

    background-color: rgba(56, 48, 48, .7);

    ${
        props => props.hover && css`
            background-color: rgb(56, 48, 48);
        `
    }
`

const Li = styled.li`
    a {
        font-size: .8rem;

        color: white;
    }
    
    
`