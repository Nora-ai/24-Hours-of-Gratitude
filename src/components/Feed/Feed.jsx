import "./Feed.css";
import { Link } from "react-router-dom";

function Feed(props) {
  console.log(props.posts.fields.item1);

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

  return (
    <>
      <div className="card-container">
        <h2 className="card-title">Today, I am grateful for...</h2>
        <div className="card-content">
          <p>{item1}</p>
          <p>{item2}</p>
          <p>{item3}</p>
          <p>{item4}</p>
          <p>{item5}</p>
          <p>{item6}</p>
          <p>{item7}</p>
          <p>{item8}</p>
          <p>{item9}</p>
          <p>{item10}</p>
        </div>
      </div>
    </>
  );
}

export default Feed;
