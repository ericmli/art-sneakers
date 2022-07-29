import styled from 'styled-components'
import { AddShoppingCart, FavoriteBorder, Search } from "@material-ui/icons"

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

const Circle = styled.div`
    
`
const Image = styled.img`
    height: 75%;
    transition: 0.3s;
    :hover{
    -moz-transform: scale(1.1);
	-webkit-transform: scale(1.1);
	transform: scale(1.5);
    transition: 0.4s;  };
`
const Info = styled.div`
    z-index:1;
    width: 100%;
    height: 20%;
    position: absolute;
    top: 80%;
    left: 0;
    display: flex;
    align-items: initial;
    justify-content: center;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    cursor: pointer;
    :hover{
        background: #f5f2f2ed ;
        transform: scale(1.1);
    }
`


const Producte = ({ item }) => {

    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon >
                    <AddShoppingCart />
                </Icon>
                <Icon>
                    <Search />
                </Icon>
                <Icon>
                        <FavoriteBorder />
                </Icon>
            </Info>
        </Container>
    )
}

export default Producte