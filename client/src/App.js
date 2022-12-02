////Imports for authentication
// import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import { CheckSession } from './services/Auth'

import { Link } from 'react-router-dom'
import Register from './components/Register'
import SignIn from './components/SignIn'
import Feed from './components/Feed'
import Home from './components/Home'
import './App.css';

function App() {
//   const [authenticated, toggleAuthenticated] = useState(false)
//   const [user, setUser] = useState(null)

//   const handleLogOut = () => {
//     //Reset all auth related state and clear localStorage
//     setUser(null)
//     toggleAuthenticated(false)
//     localStorage.clear()
//   }

// //Persisting Logged In Users
// // Nothing is more frustrating to a user than an application that constantly kicks them back to a log in screen when they refresh. Luckily, that's a simple fix.

// // What we'll do here is add some logic to check if a token is already stored in localStorage. If it is, we'll make a request to a route in our back-end that will validate and decrypt the currently stored token. This decrypted token will contain the same information about the user that we stored after signing in.

// //Next, we'll create a method called checkToken that will make a GET request to our back-end with the currently stored token to check it's validity:

//   //Here, we'll invoke the CheckSession function and store the returned information in a variable called user:
//   const checkToken = async () => {
//     const user = await CheckSession()
//     //Next, we'll store this returned user in state using the setUser method:
//     setUser(user)
//     //Finally, we'll toggle the authenticated state:
//     toggleAuthenticated(true)
//   }

// // We'll utilize useEffect to check if a token exists currently. If and only if a token exists, we'll invoke our checkToken function:
//   useEffect(()=> {
//     const token = localStorage.getItem('token')
//     if (token) {
//       checkToken()
//     }
//   }, [])




  return (
    <div className="App">
      {/* <Home
        // authenticated={authenticated}
        // user={user}
        // handleLogOut={handleLogOut}
      /> */}

    <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* Now that our registration functionality is set up, we can focus on letting a user sign in to our application.
          We'll start by providing setUser and toggleAuthenticated to the SignIn component as props in App.js: */}
          <Route path="/SignIn" element={<SignIn 
                                          // setUser={setUser}
                                          // toggleAuthenticated={toggleAuthenticated}
                                          />} />
          <Route path="/Register" element={<Register />} />
          {/* Protected Routes are routes that can only be accessed if a condition is met (usually, if user is properly authenticated). It returns the component or redirects a user to another route based on a set condition. 
          In App.js, let's pass our user and authenticated states as props to our Feed component... */}
          <Route path="/Feed" element={<Feed 
                                        // user={user} 
                                        // authenticated={authenticated}
                                        />} />
        </Routes>
      </main>



    {/* <Link to= "/">
      <div>❄️Holly-Gram Home Page❄️</div>
    </Link>
    <br/>
    <br/>
    <Routes>
    <Route exact path="/"     element={<Home/>}/>
    <Route exact path="Feed"     element={<Feed/>}/>
    <Route exact path="SignIn"     element={<SignIn/>}/>
    <Route exact path="Register"   element={<Register/>}/>
    </Routes> */}

    </div>
  );
}

export default App;
