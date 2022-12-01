import Hollygram from '../assets/Hollygram.png'
import NavBarIcons from '../assets/NavBarIcons.png'

export default function Nav () {
    return (
    <div id='NavBarContent'>

        <div id="NavBarLogo">
        <img id ="HollyGramLogo" src={Hollygram}/>
        </div>

        <div id="NavBarSearchBar">
                <form id="SearchBar">
                                        
                    <label>
                    Search
                    <input type="text" name="Search" />
                    </label>
                                        
                    <input type="submit" value="Go" />
                </form>
            </div>

        <div id="NavBarIcons">
        <img src={NavBarIcons}/>
        </div>

    </div>
    )}