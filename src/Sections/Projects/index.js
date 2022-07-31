
import styled, { css } from 'styled-components';
import { PROJECTS_DATA } from '../../data';
import Project from './project';


function Projects() {

    return (
        <Wrapper>
            {
                PROJECTS_DATA.map(pD => (
                    <Li key={pD.id}>
                        <Project
                            backgroundImg={pD.backgroundImg} 
                            title={pD.title} 
                            description={pD.description}
                            techs= {pD.techs}
                            githubLink={pD.githubLink} 
                            demoLink ={pD.demoLink}
                        />
                    </Li>
                ))
            }
        </Wrapper>
    );
}

export default Projects;

export const ProjectsStyle = css`
    position: absolute;
    top: 10px;
    left: 30%;
    width: 70%;
    min-width: 180px;

    opacity: 1;
`

const Wrapper = styled.ul`
    display: flex;
    flex-flow:  row wrap;
    justify-content: space-between;


    list-style: none;

    margin-top: 1.5rem;

`

const Li = styled.li`
    flex-basis: 45%;


    margin-bottom: 1rem;

    @media (max-width: 537px) {
        flex-basis: 95%;
    }
`