import Nav from './Nav'
import Hollygram from '../assets/Hollygram.png'
import RegisterPageIcon from '../assets/RegisterPageIcon.png'
import CommentIcon from '../assets/CommentIcon.gif'
import LikeIcon from '../assets/LikeIcon.gif'
import Snowman from '../assets/Snowman.png'

import { useEffect, useState } from 'react'
// import { GetPosts } from '../services/PostServices'

// We'll need useNavigate again for this next part:
// import { useNavigate } from 'react-router-dom'

// Over in Feed.js, let's be sure and pass those props in. We'll destructure them...


export default function Feed () {

  
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

const [users, setUsers] = useState([])
        
useEffect(() => {
const handleUsers = async () => {
    const data = await fetch("http://localhost:3001/user/allusers")
    console.log(data)

    const us = await data.json()
    setUsers(us)
    
    console.log(us)
    const data1 = { username: 'example' };

}
handleUsers()
}, [])  
console.log(users)

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
        


//We're going to wrap the JSX in our return statement in a ternary that checks if a) our user exists and b) that they are authenticated. If authenticated, we'll show the posts on the feed! If not, we need to send our user back to the Sign In page.
  //First, let's set up that ternary. We want to check if both conditions are true, so we'll use &&:
// return (user && authenticated) ?  (

const [comment, setComment] = useState("")
const [comments, setComments] = useState([])

const onClickHandler = (e) => {
    setComments((comments) => [...comments, comment])
}
const onChangeHandler = (e) => {
    setComment(e.target.value)
}

return (
<div>

    <div id="NavBarLocation">
    <Nav/>
    </div>

    <div id='FeedContent'>

        <div className="FeedPosts">
        <h1>Posts & Feed</h1>

                {/*.Map into this */}
                <div className="IndividualFeedPosts">
                    <div className="postWrapper">
                        <div className="postTop">
                            <div className="postTopLeft">
                                <img src={Snowman}/>
                                <span className="postUsername">Username Here</span>
                                <span className="postDate"    >Created @ Christmas Day</span>
                            </div>

                            <div className="postTopRight">
                                <button className="PostButtons">Edit</button>
                            </div>
                        </div>

                    <div className="PostCenter"></div>
                        <img className="postImg" src={RegisterPageIcon} alt="User's Post Pic"/>
                        <span className="postText">Blurb about why I love winter but hate shoveling</span>
                    </div>

                    <div className="PostBottom">
                        <div className="PostBottomLeft">
                            
                            <button className="PostButtons"><img className="CommentIcon" src={CommentIcon} alt=""/></button>
                            <button className="PostButtons"><img className="likeIcon"    src={LikeIcon} alt="" /></button>
                        </div>

                        <div className="postBottomRight">
                            <span className="postCommentText">Where We'd Add the Feature to Comment</span>
                        </div>
                        <br/>

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
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    {/* {posts.map((post) => (
                        <div className="card" key={post.id}>
                        <div>
                            <img src={post.picture} alt="post"/>
                        </div>
                        <p>{post.postText}</p>
                        </div>
                    ))} */}


                    {/* Template written out
                    <div className="TopOfPost">
                        <img src={Hollygram}/>
                        <h3>UserName</h3>
                    </div>

                    <div className="PictureOfPost">
                        <img src={RegisterPageIcon}/>
                    </div>

                    <div className="LikesCommentsOfPost">
                        <h4>Like</h4>
                        <h4>Comment</h4>
                        <h4>Tags</h4>
                    </div> */}
                    
                </div>
        </div>

    <div className="SuggestionsForYou">

        <h1>Profile & Suggestions</h1>


        <div className="IndividualProfileAndSuggestions">
        {users.map((user) => (
                    <div className="card">
                    <p>{user.userName}</p>
                    {/* <img className="pics" style={{ display: 'block' }} src={user.profilePic} alt="profile picture" /> */}
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