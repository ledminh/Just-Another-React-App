import { css } from 'styled-components';


function AboutMe () {

    return (
        <>
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
                I do not have much experience working as a developer in the U.S. However, I am eager to learn what I have not known yet. I built some projects in JavaScript to showcase my skills. You can see the complete list of my projects here: <a href='https://github.com/ledminh/my-projects' target="_blank" rel="noopener noreferrer">Github::My-Projects</a>. This list will be updated regularly as I am still learning and practicing to improving my skill.
            </p>
        </>
    )
}

export default AboutMe;


export const AboutMeStyle = css`
    margin-top: 1rem;

    width: 80%;
    max-width: 700px;


`