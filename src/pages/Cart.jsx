import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'

const Container = styled.div`
`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({
    padding: "10px",overflow:"hidden"
  })}
`
const Title = styled.h1`
    
    font-weight: 300;
    text-align: center;
    background: #9e989833;
    padding: 20px;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

`
const TopButton = styled.button`

    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`


const TopTexts = styled.div`
${mobile({
    display: "none",
  })}

`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;

`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
    flexDirection: "column",
  })}
`
const Info = styled.div`
    flex:3;

`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
    flexDirection: "column",
  })}
`
const ProductDetail = styled.div`
    flex:2;
    display: flex;
`

const Image = styled.img`
    width: 300px;
`

const Details = styled.div`
    padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${props => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({
    margin: "5px 15px",
  })}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({
    marginBottom: "20px",
  })}
`

const Hr = styled.hr`
    background: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=> props.type === "total" && "500"};
    font-size: ${props=> props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background: black;
    color: white;
    font-weight: 600;
`

export const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>YOUR SHOPPING CART</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://artwalk.vteximg.com.br/arquivos/ids/261867-1000-1000/60413-3-050-1.jpg?v=637931427015870000" />
                                <Details>
                                    <ProductName><b> Product:</b> AIR MAX PLUS</ProductName>
                                    <ProductId><b> ID:</b> 123456789</ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b> Size:</b> 40</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice> $ 199</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://artwalk.vteximg.com.br/arquivos/ids/219468-1000-1000/Tenis-Nike-Air-Max-95-Essential-Masculino-Preto.jpg?v=637135933134130000" />
                                <Details>
                                    <ProductName><b> Product:</b> AIR MAX 95</ProductName>
                                    <ProductId><b> ID:</b> 123456789</ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b> Size:</b> 40</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice> $ 199</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 498</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 39.99</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Discount</SummaryItemText>
                            <SummaryItemPrice>$ -39.99</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 458.01</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>

                </Bottom>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}
