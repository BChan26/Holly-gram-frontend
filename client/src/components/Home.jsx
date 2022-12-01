// import Nav from './Nav'
// import Feed from './Feed'
// import Register from './Register'
// import SignIn from './SignIn'

import {Link} from 'react-router-dom'

export default function Home ({authenticated, user, handleLogOut}) {
    
    let authenticatedOptions
    if (user) {
      authenticatedOptions = (
        <nav>
          <h3>Welcome {user.email}!</h3>
          <Link to="/Feed">Feed</Link>
          <Link onClick={handleLogOut} to="/">
            Sign Out
          </Link>
        </nav>
      )
    }
  
    const publicOptions = (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Register">Register</Link>
        <Link to="/SignIn">Sign In</Link>
      </nav>
    )
    
    
    return (
    <div id='HomeContent'>

    <header>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>


            {/* 
            <Link to= "/Feed">
                <div>Link to Feed</div>
            </Link>

            <Link to= "/SignIn">
                <div>Link to SignIn</div>
            </Link>

            <Link to= "/Register">
                <div>Link to Register</div>
            </Link> */}


    </div>
    )}