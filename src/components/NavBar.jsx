import styled from 'styled-components'


const NavContainer = styled.div`
display: flex;
flex-direction: column;
background-color: ${props => props.theme.backgroundColor}
`

const TitleOne = styled.h2`
font-family: helvetica;
font-size: 28px;
color: white;
text-transform: uppercase;
-webkit-text-stroke:transparent;
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: #3Eb489;
margin: 40px 0 0 40px;
`

const TitleTwo = styled.h2`
font-family: helvetica;
font-size: 28px;
color: #3Eb489;
text-transform: uppercase;
-webkit-text-stroke:transparent;
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: #3Eb489;
margin: 0 0 0 60px;
`

const TitleThree = styled.h2`
font-family: helvetica;
font-size: 28px;
color: white;
text-transform: uppercase;
-webkit-text-stroke:transparent;
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: #3Eb489;
margin: 0 0 0 80px;
`

function NavBar(props) {

    
    return (<>
        <NavContainer>
            <TitleOne>Today, I am grateful for</TitleOne>
            <TitleTwo>Today, I am grateful for</TitleTwo>
            <TitleThree>Today, I am grateful for</TitleThree>
        </NavContainer>
        
    </>)
}

export default NavBar