import Hollygram from '../assets/Hollygram.png'
import NavBarIcons from '../assets/NavBarIcons.png'

export default function Nav () {
    return (
    <div id='NavBarContent' style={{ 
        backgroundImage: `url("https://i.postimg.cc/SQZChxPc/image-1.png")`,
        backgroundPosition: 'right top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto'
    }}>

        <div id="NavBarLogo">
        <img id ="HollyGramLogo" src={Hollygram}/>
        </div>

        <div id="NavBarSearchBar">
                <form id="SearchBar">
                                        
                    <label>
                    Search
                    <input type="text" name="Search" />
                    </label>
                                        
                    <button className="RegisterButtons" type="submit">Go</button>
                </form>
            </div>

        {/* <div id="NavBarIcons">
        <img src={NavBarIcons}/>
        </div> */}

    </div>
    )}