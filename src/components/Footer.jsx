import styled from 'styled-components'

const NiceContainer = styled.div`
background-color: #3Eb489;
height: 100px;
`

const NiceDay = styled.p`
text-align: center;
color: white;
font-size: 20px;
text-transform: uppercase;
padding-top: 40px;
`

function Footer() {

    return(

        <NiceContainer>
            <NiceDay>Have a nice day!</NiceDay>
        </NiceContainer>

    )
}

export default Footer