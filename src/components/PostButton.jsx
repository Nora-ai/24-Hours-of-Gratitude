import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ButtonToPost = styled.div`
position: absolute;
top: 12%;
right: 10%;
width: 100px;
height: 45px;
background-color: #3Eb489;
border-radius: 3px;
`

const Post = styled.p`
text-align: center;
text-transform: uppercase;
text-decoration: none;
color: white;
font-weight: bolder;
align-items: center;
`

function PostButton() {
    return (
        <div>
                <Link to='./new'>
                    <ButtonToPost>
                        <Post>Post</Post>
                    </ButtonToPost>
                </Link>
        </div>
    )

}

export default PostButton