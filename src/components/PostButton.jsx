import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ButtonToPost = styled.div`
position: absolute;
top: 10%;
right: 10%;
width: 100px;
height: 50px;
background-color: #3Eb489;`

const Post = styled.p`
text-align: center;
text-decoration: none;
color: #36454f;
font-weight: bolder;
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