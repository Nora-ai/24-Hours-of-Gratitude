import { useState } from "react";
import axios from "axios";
import { baseUrl, config } from "../services"
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const FormTitle = styled.h2`
text-align: center;
`
const ListForm = styled.div`
display: flex;
flex-direction: column;
`

const FormInput = styled.input`
width: 500px;
height: 20px;
margin: 10px auto;
`

const FormButton = styled.button`
width: 200px;
margin: 20px auto;
`

const LabelAuthor = styled.label`
text-align: center`

const FormAuthor = styled.input`
width: 200px`

function Post(props) {
  const [item1, setItem1] = useState("");
  const [item2, setItem2] = useState("");
  const [item3, setItem3] = useState("");
  const [item4, setItem4] = useState("");
  const [item5, setItem5] = useState("");
  const [item6, setItem6] = useState("");
  const [item7, setItem7] = useState("");
  const [item8, setItem8] = useState("");
  const [item9, setItem9] = useState("");
  const [item10, setItem10] = useState("");
  const [author, setAuthor] = useState("")
  const history = useHistory()


  const handleSubmit= async (e) => {
      e.preventDefault()
      const fields = {
          item1,
          item2,
          item3,
          item4,
          item5,
          item6,
          item7,
          item8,
          item9,
          item10
      }

      await axios.post(baseUrl, {fields}, config)
      props.setToggleFetch((curr) => !curr)

      history.push('/home')

      //if fields are empty, do not submit and message pops up


  }

  return (<>
    <FormTitle>Write down 10 things you are grateful for today</FormTitle>
    <ListForm>
      <form onSubmit={handleSubmit}>
        <FormInput required type="text" value={item1}
          onChange={(e) => setItem1(e.target.value)}
        />

        <FormInput required
          type="text" value={item2}
          onChange={(e) => setItem2(e.target.value)}
        />

        <FormInput required type="text" value={item3}
          onChange={(e) => setItem3(e.target.value)}
        />

        <FormInput required type="text" value={item4}
          onChange={(e) => setItem4(e.target.value)}
        />

        <FormInput required type="text" value={item5}
          onChange={(e) => setItem5(e.target.value)}
        />

        <FormInput required type="text" value={item6}
          onChange={(e) => setItem6(e.target.value)}
        />

        <FormInput required type="text" value={item7}
          onChange={(e) => setItem7(e.target.value)}
        />

        <FormInput required type="text" value={item8}
          onChange={(e) => setItem8(e.target.value)}
        />

        <FormInput required type="text" value={item9}
          onChange={(e) => setItem9(e.target.value)}
        />

        <FormInput required type="text" value={item10}
          onChange={(e) => setItem10(e.target.value)}
        />
        <LabelAuthor>Author (or Anonymous)</LabelAuthor>
        <FormAuthor
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}>
        </FormAuthor>
        
    
       <FormButton type="submit">Post</FormButton>
      </form>
      </ListForm>
    </>
  );
}

export default Post;
