import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'

const Container= styled.div`

`

const Wrapper= styled.div`
    padding: 50px;
    display: flex;
    ${mobile({
    padding:"10px", flexDirection:"column"
  })}
`

const ImgContainer= styled.div`
    flex:1;
    overflow: hidden;
`

const Image= styled.img`
    width: 100%;
    height: 90vh;
    object-fit: contain;
    -webkit-transition: .5s ease;
   transition: transform .5s ease;
    :hover{
        -webkit-transform: scale(1.5);
   transform: scale(1.5);
    }
    ${mobile({
    height: "50vh",
  })}
`

const InfoContainer= styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({
    padding:"10px",
  })}
`

const Title= styled.h1`
    font-weight: 200;
`

const Desc= styled.p`
    margin: 20px 0px;
`

const Price= styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    display: flex;
    width: 50%;
    margin: 30px 0px;
    justify-content: space-between;
    ${mobile({
    width: "100%",
  })}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
    ${mobile({
    width: "100%",
  })}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background: white;
    cursor: pointer;
    font-weight: 500;
    :hover{
        background: #efecec40;
    }
`


export const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://artwalk.vteximg.com.br/arquivos/ids/261867-1000-1000/60413-3-050-1.jpg?v=637931427015870000"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Sneakers</Title>
                <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Desc>
                <Price>$ 199</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>

                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>37</FilterSizeOption>
                            <FilterSizeOption>38</FilterSizeOption>
                            <FilterSizeOption>39</FilterSizeOption>
                            <FilterSizeOption>40</FilterSizeOption>
                            <FilterSizeOption>41</FilterSizeOption>
                            <FilterSizeOption>42</FilterSizeOption>
                        </FilterSize>
                    </Filter>

                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>


        <Newsletter/>
        <Footer/>
    </Container>
  )
}
