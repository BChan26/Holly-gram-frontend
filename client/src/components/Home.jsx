// import Nav from './Nav'
// import Feed from './Feed'
// import Register from './Register'
// import SignIn from './SignIn'

import {Link} from 'react-router-dom'

export default function Home () {
    return (
    <div id='HomeContent'>



            <Link to= "/Feed">
                <div>Link to Feed</div>
            </Link>

            <Link to= "/SignIn">
                <div>Link to SignIn</div>
            </Link>

            <Link to= "/Register">
                <div>Link to Register</div>
            </Link>

        {/* <div id="NavBar">
            <Nav/>
        </div>
        <div id='Feed'>
            <Feed/>
        </div>
        <div id='Feed'>
            <Register/>
        </div>
        <div id='Feed'>
            <SignIn/>
        </div> */}


    </div>
    )}