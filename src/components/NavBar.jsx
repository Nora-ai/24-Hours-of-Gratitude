import styled from 'styled-components'
import { CgSun } from 'react-icons/cg'
import { HiMoon } from 'react-icons/hi'

const Toggle = styled.button`
cursor: pointer;
height: 50px;
width: 50px;
border-radius: 50%;
border: none;
background-color: ${props => props.theme.backgroundColor};
color: ${props => props.theme.color};
transition: all .5s ease;
`
const NavContainer = styled.div`
display: flex;
flex-direction: column;
background-color: ${props => props.theme.backgroundColor}
`

const TitleOne = styled.h2`
font-family: helvetica;
font-size: 28px;
color: ${props => props.theme.color}
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


    const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />
    
    const changeTheme = (props) => {
        if (props.theme === 'light') {
          props.setTheme("dark") 
        } else {
          props.setTheme("light")
        }
      }
    
    return (<>
        <NavContainer>
            <TitleOne>Today, I am grateful for</TitleOne>
            <TitleTwo>Today, I am grateful for</TitleTwo>
            <TitleThree>Today, I am grateful for</TitleThree>
            <Toggle onClick={changeTheme}>{icon}</Toggle>
        </NavContainer>
        
    </>)
}

export default NavBar