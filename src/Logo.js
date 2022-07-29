import styled from 'styled-components';

function Logo() {

    return (
        <Wrapper>
            <M />
            <L />
        </Wrapper>
    )
}

export default Logo;

const Wrapper = styled.div`
    margin-top: 10px;
    margin-left: 10px;

    width: 150px;
    

    background-color: #423F3F;
    font-family: 'Inter', sans-serif;

`

const M = styled.div`
    display: inline-block;
    width: 50%;
    ::before {
        content: "M";
        font-size: 120px;
    }
`

const L = styled.div`
    display: inline-block;
    width: 50%;
    ::before {
        content: "L";
        font-size: 120px;

        color: blue;
    }


`