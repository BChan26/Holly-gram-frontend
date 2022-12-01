import { Route, Routes, Link } from 'react-router-dom'
import Register from './components/Register'
import SignIn from './components/SignIn'
import Feed from './components/Feed'
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div className="App">

    <Link to= "/">
      <div>❄️Holly-Gram Home Page❄️</div>
    </Link>
    <br/>
    <br/>
    <Routes>
    <Route exact path="/"     element={<Home/>}/>
    <Route exact path="Feed"     element={<Feed/>}/>
    <Route exact path="SignIn"     element={<SignIn/>}/>
    <Route exact path="Register"   element={<Register/>}/>
    </Routes>

    </div>
  );
}

export default App;
