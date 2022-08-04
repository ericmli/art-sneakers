import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from '../responsive'

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({
    height: "0px 20px", display:"Flex", flexDirection:"column"
  })}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({
    marginRight: "0px",
  })}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    border: none;
    font-size: 1em;
    ${mobile({
    height: "10px 0px",
  })}
`
const Option = styled.option`
    border: none;
    font-size: 1em;
    background: white;
    
`
export const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Blue</Option>
                        <Option>Gray</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>34</Option>
                        <Option>35</Option>
                        <Option>36</Option>
                        <Option>37</Option>
                        <Option>38</Option>
                        <Option>39</Option>
                        <Option>40</Option>
                        <Option>41</Option>
                        <Option>42</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option disabled selected>Newest</Option>
                        <Option>High price</Option>
                        <Option>Small price </Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}
