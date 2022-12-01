import Nav from './Nav'
import Hollygram from '../assets/Hollygram.png'
import RegisterPageIcon from '../assets/RegisterPageIcon.png'

export default function Feed () {
    return (
<div>

    <div id="NavBarLocation">
    <Nav/>
    </div>

    <div id='FeedContent'>

        <div className="FeedPosts">
        <h1>HollyGram Mapped Feed</h1>
        
                <div className="IndividualFeedPosts">
                    {/* Will be mapped through with a function/query */}
                    
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

                <div className="IndividualFeedPosts">
                    {/* Will be mapped through with a function/query */}
                    
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

        </div>

        <div className="SuggestionsForYou">
        <h1>Suggestions For You</h1>
        </div>

    </div>
</div>
    )}