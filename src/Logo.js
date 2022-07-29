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
    height: 150px;    

    background-color: #423F3F;
    font-family: 'Inter', sans-serif;
    position: relative;
`

const M = styled.div`
    position: absolute;
    left: -7px;
    top: -33px;
    line-height: 149px;

    color: white;

    ::before {
        content: "M";
        font-size: 116px;
    }
`

const L = styled.div`
    position: absolute;
    bottom: -67px;
    right: -4px;
    line-height: 143px;
    color: white;

    ::before {
        content: "L";
        font-size: 118px;
        font-weight: 800;
        
    }


`