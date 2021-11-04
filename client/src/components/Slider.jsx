import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    background-color:coral;
    position: relative;
    overflow:hidden;
`

const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left:${props => props.direction === "left" && "10px"};
    right:${props => props.direction === "right" && "10px"};
    margin: auto;
    transition:0.5s all;
    cursor: pointer;

    &:hover{
       background:#e8dddd;
    }
`

const Wrapper = styled.div`
    height:100%;
    display:flex;
    transform:translateX(0vw);
`
const Slide = styled.div`
    width:100vw;
    height:100vh;
    display:flex;align-items:center;
`
const ImgContainer = styled.div`
    flex:1;
    height:100%;
`
const Image = styled.img`
    height:80%;

`
const InfoContainer = styled.div`
    flex:1;
    padding:50px;
`

const Title = styled.h1`
    font-size:70px;

`
const Desc = styled.p`
    margin:50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding:10px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
`

const Slider = () => {

    const [slideIndex, setslideIndex] = useState(initialState)
    const handleClick = (direction) => {
        
    }

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick('left')}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                    </ImgContainer>
                    <InfoContainer>
                        <Title> SUMMER SALE</Title>
                        <Desc>
                            DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
                        </Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
                 <Slide>
                    <ImgContainer>
                    </ImgContainer>
                    <InfoContainer>
                        <Title> SUMMER SALE 2</Title>
                        <Desc>
                            DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
                        </Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
                 <Slide>
                    <ImgContainer>
                    </ImgContainer>
                    <InfoContainer>
                        <Title> SUMMER SALE 3</Title>
                        <Desc>
                            DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
                        </Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right"  onClick={()=>handleClick('right')}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
