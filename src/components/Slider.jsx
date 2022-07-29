import styled from "styled-components"
import { ArrowBackOutlined, ArrowForwardOutlined } from '@material-ui/icons'
import { useState } from "react"
import sliderItems from "../data"

const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    background: coral;
    position: relative;
    overflow: hidden;
    
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom:0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translate(${(props) => props.slideIndex * -100}vw);
    transition: all 1.5s ;
`
const Slide = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    background: ${props => props.bg};

    
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    height: 100%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    color: ${props => props.clr};
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    font-weight: 600;
    background: transparent;
    cursor: pointer;
    border-radius: 30px;
    border: 1.5px solid transparent;
    background: white;
    :hover{
        background: #dad2d2e9;
    }
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        } else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackOutlined />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc clr={item.clr}>{item.desc}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider