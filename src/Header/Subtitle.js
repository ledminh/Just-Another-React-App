import styled from 'styled-components';

function Subtitle () {

    return (
        <Wrapper>
            <Line>FRONT END</Line>
            <Separator />
            <Line>DEVELOPER</Line>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    height: 170px;


    margin-left: 5px;

    display: flex;

    flex-flow: column nowrap;
    justify-content: center;
`


const Line = styled.div`
    font-size: 1.8rem;
    font-weight: 800;
    line-height: 3rem;

    color: #2e2b2b;
`

const Separator = styled.div`
    height: 10px;    
    background: rgb(46,43,43);
    background: linear-gradient(90deg, rgba(46,43,43,1) 6%, rgba(117,109,109,1) 61%, rgba(117,110,110,1) 89%); 
`

export default Subtitle;