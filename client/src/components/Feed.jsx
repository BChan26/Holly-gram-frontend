import Nav from './Nav'
import Hollygram from '../assets/Hollygram.png'
import RegisterPageIcon from '../assets/RegisterPageIcon.png'
import CommentIcon from '../assets/CommentIcon.gif'
import LikeIcon from '../assets/LikeIcon.gif'
import Snowman from '../assets/Snowman.png'

import axios from 'axios'

import { useEffect, useState } from 'react'
// import { GetPosts } from '../services/PostServices'

// We'll need useNavigate again for this next part:
// import { useNavigate } from 'react-router-dom'

export default function Feed () {

//Reference Fetch Call from Tierra - Don't Delete
//         const [users, setUsers] = useState([])
        
//         useEffect(() => {
//         const handleUsers = async () => {
//             const data = await fetch("http://localhost:3000/feed")
//             console.log(data)
//             const us = await data.json()
//             setUsers(us.userdata)
//             console.log(us)
//             const data1 = { username: 'example' };
// await fetch('http://localhost:3000', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data1),})
//         }
//         handleUsers()
//         }, [])  



//UseState and UseEffect for Mapping Out Users
const [users, setUsers] = useState([])
        
useEffect(() => {
const handleUsers = async () => {
    const data = await fetch("http://localhost:3001/user/allusers")
    // console.log(data)

    const us = await data.json()
    setUsers(us)
    
    // console.log(us)
    const data1 = { username: 'example' };

}
handleUsers()
}, [])  
// console.log(users)



//UseState and UseEffect for Mapping Out Posts
const [posts, setPosts] = useState([])

useEffect(() => {
    const handlePosts = async () => {
        const post = await fetch("http://localhost:3001/feed/")
        // console.log(post)

        const postInJSON = await post.json()
        setPosts(postInJSON)
        // console.log(postInJSON)
    }
handlePosts()
}, [])
// console.log(posts)


//UseState and UseEffect for DELETING a post based on its ID
const handleDeletePosts = async () => {
        const post = await axios.delete(`http://localhost:3001/feed/7`)
        // return (post)
        window.location.reload()
}
//moving forward, we need to make the ending # dynamic, need to pass in the id from posts




//Authentication
// export default function Feed ({user, authenticated}) {
        // let navigate = useNavigate()
        // const [posts, setPosts] = useState([])
        // useEffect(() => {
        // const handlePosts = async () => {
        //     const data = await GetPosts()
        //     setPosts(data)
        // }
        // handlePosts()
        // }, [])


//UseState and OnChangeHandler for Comments
const [comment, setComment] = useState("")
const [comments, setComments] = useState([])

const onClickHandler = (e) => {
    setComments((comments) => [...comments, comment])
}
const onChangeHandler = (e) => {
    setComment(e.target.value)
}



//Return to Display On Screen
return (
<div>

    <div id="NavBarLocation">
    <Nav/>
    </div>

    <div id='FeedContent'>

        <div className="FeedPosts">
        <h1>Posts & Feed</h1>

                {/* Mapping out posts into Feed Section */}
                {posts.map((value) => (
                <div className="IndividualFeedPosts">
                    <div className="postWrapper">
                        <div className="postTop">
                            <div className="postTopLeft">
                                <img src={Snowman}/>
                                <span className="postUsername">{value.id}</span>
                                <span className="postDate"    >{value.createdAt}</span>
                            </div>

                            <div className="postTopRight">
                                <button className="PostButtons" onClick={handleDeletePosts} >Delete</button>
                            </div>
                        </div>

                    <div className="PostCenter"></div>
                        <img className="postImg" src={value.picture} alt="User's Post Pic"/>
                        <span className="postText">{value.postText}</span>
                    </div>

                    <div className="PostBottom">
                        <div className="PostBottomLeft">
                            <span className="NumberOfLikes">{value.likes} likes</span>
                            <button className="PostButtons"><img className="CommentIcon" src={CommentIcon} alt=""/></button>
                            <button className="PostButtons"><img className="likeIcon"    src={LikeIcon} alt="" /></button>
                        </div>

                        <div className="postBottomRight">
                            <span className="postCommentText">Where We'd Add the Feature to Comment</span>
                        </div>
                        <br/>
                        

                        {/* Tierra's Addition of the Comment Box */}
                        <div className="main-container">
                            {comments.map((text) => (
                                                            <div className="comment-container">{text}</div>
                            ))}
                            <div className="comment-flexbox"></div>
                            <h3 className="comment-text">Comment</h3>
                            <textarea 
                            value={comment}
                            onChange={onChangeHandler}
                            className="input-box"/>
                            <button onClick={onClickHandler}className="comment-button">Submit</button>
                        </div>
                    </div> 
                </div>
                ))}
        </div>

    {/* Right Hand Column */}
    <div className="SuggestionsForYou">

        <h1>Profile & Suggestions</h1>

        <div className="IndividualProfileAndSuggestions">
        {users.map((user) => (
                    <div className="card">
                    <p>{user.userName}</p>
                    <img className="pics" style={{ display: 'block' }} src={user.profilePic} alt="profile picture" />
                    </div>
                ))}
        </div>
    </div>

    </div>
</div>
    // )
    //   // Next, we'll set up the JSX for an unauthenticated user:
    // : (
    //     <div className="protected">
    //       <h3>Oops! You must be signed in to do that!</h3>
    //       <button onClick={()=> navigate('/SignIn')}>Sign In</button>
    //     </div>
    //   )
// }
)}