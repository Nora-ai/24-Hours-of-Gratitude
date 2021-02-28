import "./Feed.css";
import Likes from '../Likes'
import { styled } from 'styled-components'

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
      <div className="card-container">
        <div className="title-and-time">
            <h2 className="card-title">I am grateful for...</h2>
            <p className="timestamp">{convertedTime} PM</p>
        </div>
        <div className="card-content">
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
        </div>
        <Likes />
        <p className="author">By: {props.posts.fields.author}</p>
      </div>
      
    </>
  );
}

export default Feed;
