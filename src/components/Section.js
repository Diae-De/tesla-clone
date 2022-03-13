import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section(props) {
    return (
        <Wrap bgImage={props.backgroundImg}>
            <Fade bottom>
                <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                </ItemText>
            </Fade>
            
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                    {props.leftbtntext && 
                        <LeftButton>
                            {props.leftbtntext}
                        </LeftButton>
                    }
                    {props.rightbtntext && 
                        <RightButton>
                            {props.rightbtntext}
                        </RightButton>
                    }
                    </ButtonGroup>
                    <DownArrow src={props.arrow}/>
                </Fade>
            </Buttons>
            
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:no-repeat;
    background-size: cover;
    background-position: center;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    background-image:${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media(max-width:768px){
        flex-direction:column;
    };
`

const LeftButton = styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:250px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:13px;
    cursor:pointer;
    margin:10px;
`

const RightButton = styled(LeftButton)`
    background-color: #fff;
    color:#393c41;
    opacity:0.65;
`

const DownArrow = styled.img`
    height:40px;
    overflow-x: hidden;
    animation:animateDown infinite 1.5s;
    margin-left:45%;
`

const Buttons = styled.div`

`