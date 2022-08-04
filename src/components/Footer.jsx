import { GitHub, Instagram, LinkedIn, Twitter } from "@material-ui/icons"
import { Link} from "react-router-dom"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    overflow: hidden;
    background-color: #111;
    color: white;
    ${mobile({
    flexDirection: "column",
  })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

`

const Logo = styled.h1`
    
`

const Desc = styled.div`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50% ;
    color: white;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
    display: "none",
  })}
 `

const Title = styled.h2`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    display: flex;
    flex-wrap: wrap;
    color: white;

`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    :hover{
        color: #ffffff73;
    }
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`

const Payment = styled.img`
   max-height: 30px;
`

export const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>artSNEAKERS.</Logo>
                <Desc>The brand is not limited to the practice of sports. Comfort and technology in clothing and footwear that navigate between sport and casual to directly contribute to the performance of athletes around the world available for you to discover a new version of yourself.</Desc>
                <SocialContainer>
                    <SocialIcon color="#E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="#55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="#000">
                        <GitHub />
                    </SocialIcon>
                    <SocialIcon color="#0558ff">
                        <LinkedIn />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>

                <Title>USEFUL LINKS</Title>
                <Link to="/products"><List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Sneakers</ListItem>
                    <ListItem>Woman Sneakerss</ListItem>
                    <ListItem>My account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>About Us</ListItem>
                </List>
                </Link>
            </Center>
            <Right>

                <Title>CONTACT</Title>
                <ContactItem>Av. De Parelheiros, 1803 - Jardim Marcelo</ContactItem>
                <ContactItem>+55 (11) 97576-7648</ContactItem>
                <ContactItem>ericlima.contato@gmail.com</ContactItem>
                <ContactItem>
                    <Payment src="https://images.lojanike.com.br/site/ni/icones/mastercard.svg" />
                    <Payment src="https://images.lojanike.com.br/site/ni/icones/visa.svg" />
                    <Payment src="https://images.lojanike.com.br/site/ni/icones/elo.svg" />
                    <Payment src="https://images.lojanike.com.br/site/ni/icones/boleto.svg" />
                </ContactItem>
            </Right>

        </Container>
    )
}
export default Footer