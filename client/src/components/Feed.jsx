import Nav from './Nav'
import Hollygram from '../assets/Hollygram.png'
import RegisterPageIcon from '../assets/RegisterPageIcon.png'

// import { useEffect, useState } from 'react'
// import { GetPosts } from '../services/PostServices'

// We'll need useNavigate again for this next part:
// import { useNavigate } from 'react-router-dom'

// Over in Feed.js, let's be sure and pass those props in. We'll destructure them...


export default function Feed () {

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

return (
<div>

    <div id="NavBarLocation">
    <Nav/>
    </div>

    <div id='FeedContent'>

        <div className="FeedPosts">
        <h1>HollyGram Mapped Feed</h1>

                {/* Check to make these values match the postdata */}
                <div className="IndividualFeedPosts">
                {/* {posts.map((post) => (
                    <div className="card" key={post.id}>
                    <div>
                        <img src={post.picture} alt="post"/>
                    </div>
                    <p>{post.postText}</p>
                    </div>
                ))} */}
                    
                    
                    
                    
                    
                    
                    {/* Template written out*/}
                    
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
                    </div>
                    
                </div>

                <br/>

        </div>

        <div className="SuggestionsForYou">
        <h1>Where We'll Put Profile Info for User</h1>
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