import styled from 'styled-components';
import Logo from './Logo';
import Subtitle from './Subtitle';
import ContactLinks from './ContactLinks';

function Header () {

    return (
        <Wrapper>
            <Logo />
            <Subtitle />
            <ContactLinks/>
        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.header`
    display: flex;

    

   
`