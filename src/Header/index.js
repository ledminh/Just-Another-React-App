import styled from 'styled-components';
import Logo from './Logo';
import Subtitle from './Subtitle';

function Header () {

    return (
        <Wrapper>
            <Logo />
            <Subtitle />
        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
    display: flex;

    margin-top: 5px;
    margin-left: 5px;
`