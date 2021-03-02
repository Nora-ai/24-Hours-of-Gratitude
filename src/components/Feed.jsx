import Likes from './Likes'
import styled from 'styled-components'

const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
border: ${props => props.theme.border};
width: 75%;
margin: 10% auto;
padding: 20px;
background-color: ${props => props.theme.backgroundColor};
`

const TitleAndTime = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
const CardTitle = styled.h2`
width: 600px;
text-align: center;
font-family: helvetica;
font-size: 24px;
color: ${props => props.theme.color};
text-transform: uppercase;
`
const TimeStamp = styled.p`
margin-top: 15px;
margin-right: 15px;
padding: 5px;
width: 100px;
color: ${props => props.theme.color};
`

const CardContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center
align-items: flex-start;
padding: 5% 10%;
font-size: 14px;
color: ${props => props.theme.color};
text-transform: uppercase;
font-family: helvetica;
`

const Author = styled.p`
padding-top: 20px;
text-align: center;
color: ${props => props.theme.color};
`

function Feed(props) {

  const {
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
  } = props.posts.fields;


  const tableTime = props.posts.createdTime
  const convertedTime = tableTime.split('').splice(11,5)

  // function to return AM or PM
//   const itemsArray = props.posts.fields
//   const newArray = Object.values(itemsArray)
//   console.log(newArray)
  

  return (
    <>
      <CardContainer>
        <TitleAndTime>
            <CardTitle>I am grateful for...</CardTitle>
            <TimeStamp>{convertedTime} PM</TimeStamp>
        </TitleAndTime>
        <CardContent>
          <p>1. {item1}</p>
          <p>2. {item2}</p>
          <p>3. {item3}</p>
          <p>4. {item4}</p>
          <p>5. {item5}</p>
          <p>6. {item6}</p>
          <p>7. {item7}</p>
          <p>8. {item8}</p>
          <p>9. {item9}</p>
          <p>10. {item10}</p>
        </CardContent>
        <Likes />
        <Author>By: {props.posts.fields.author}</Author>
      </CardContainer>
      
    </>
  );
}

export default Feed;


