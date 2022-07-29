import styled from "styled-components"

const Container = styled.div`
    flex:1;
    margin: 3px;
    height: 60%;
    position: relative;
    
`

const Image = styled.img`
    width: 100%;
    height: 80%;
    object-fit: contain;
    background: #e5ece9;
`

const Inf = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
`

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    font-weight: bolder;
    
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Inf>
            <Title>{item.title}</Title>

        </Inf>
    </Container>
  )
}

export default CategoryItem