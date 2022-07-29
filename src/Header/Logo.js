import styled, {keyframes} from 'styled-components';

function Logo() {

    return (
            <Border>
                <Wrapper>
                    <M />
                    <L />
                </Wrapper>
            </Border>

    )
}

export default Logo;

const BeatingAnimation = keyframes`
    50% { box-shadow: 0 0 9px black; }
`


const Border = styled.div`
    border: 5px double #756e6e;
    border-radius: 20px;
    width: 170px;
    height: 170px;

    display: grid;

    :hover {
        border: 5px double #423F3F;
        box-shadow: 0 0 5px black;

        animation: ${BeatingAnimation} .5s infinite;

        * {
            background-color: inherit;
            color: #423F3F;
        }
    }
        
    transition: all .5s;
`


const Wrapper = styled.div`
 
    width: 150px;
    height: 150px;    
    margin: auto;

    background-color: #423F3F;
    font-family: 'Inter', sans-serif;
    position: relative;

  
`

const M = styled.div`
    position: absolute;
    left: -7px;
    top: -33px;
    line-height: 149px;

    color: #756e6e;
    
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
    color: #756e6e;

    ::before {
        content: "L";
        font-size: 118px;
        font-weight: 800;
        
    }

 

`