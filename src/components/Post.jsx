import { useState } from "react";
import axios from "axios";
import { baseUrl, config } from "../services"
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const PageContainer = styled.div`
height: 100vh;
width: 100vw;
padding-top: 120px;
`

const FormTitle = styled.h2`
text-align: center;
color: #3Eb489;
width: 400px;
margin: 0 auto;
font-size: 20px;
padding-bottom: 10px;
text-transform: uppercase;
font-family: helvetica;
`
const ListFormContainer = styled.div`
display: flex;
flex-direction: column;
`

const ListForm = styled.form`
display: flex;
flex-direction: column;
margin: 0 auto;
`

const FormInput = styled.input`
width: 500px;
height: 30px;
margin: 10px auto;
border-radius: 5px;
border: none;
background: lightgrey;
`

const AuthorButtonDiv = styled.div`
display: flex;
margin: 0 auto;
justify-content: space-around;
align-items: center;
`

const FormButton = styled.button`
width: 200px;
margin: 20px auto;
background-color: #3Eb489;
color: white;
height: 34px;
border: none;
margin-left: 30px;
border-radius: 3px;
`

const FormAuthor = styled.input`
width: 200px;
border-radius: 3px;
border: none;
background: lightgrey;
height: 30px;

`

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
  <PageContainer>
    <FormTitle>Write down 10 things you are grateful for today</FormTitle>
    <ListFormContainer>
      <ListForm onSubmit={handleSubmit}>
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

        <AuthorButtonDiv>
            <FormAuthor
            type="text"
            placeholder="  Author (or Anonymous)"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}>
            </FormAuthor>
            <FormButton type="submit">Post</FormButton>
       </AuthorButtonDiv>
      </ListForm>
      </ListFormContainer>
      </PageContainer>
    </>
  );
}

export default Post;
