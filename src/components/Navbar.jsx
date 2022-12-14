import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {mobile} from "../responsive"

const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "50px",
    
  })}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display : flex ;
  justify-content: space-between;
  ${mobile({
    padding: "15px",position: "relative", left:"0",
  })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: -10px;
  ${mobile({
    display: "none"
  })}
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none"
  })}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({
    display: "none"
  })}
`

const Input = styled.input`
    border: none;
    ${mobile({
    width: "50px"
  })}
`

const Logo = styled.h1`
  font-weight: bold ;
  color: black;
  ${mobile({
    fontSize:"20px"
  })}
`

const Center = styled.div`
flex: 1;
text-align: center;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({
    flex:2 ,justifyContent: "end"
  })}
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({
    fontSize: "12px", 
  })}
`
const ColorCart = styled.span`
  color: black;

`

const Navbar = () => {

  return (
    <Container>
      <Wrapper>

        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{ color: "Gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <Center>
          <Link to="/"><Logo>artSNEAKERS.</Logo></Link>
        </Center>

        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Link to="/cart"><Badge badgeContent={4} color="primary">
              <ColorCart><ShoppingCartOutlined /></ColorCart>
            </Badge>
            </Link>
          </MenuItem>
        </Right>

      </Wrapper>
    </Container>
  )

}

export default Navbar