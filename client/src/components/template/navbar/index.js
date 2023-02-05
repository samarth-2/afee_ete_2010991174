import './index.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Navbar = (props) => {
    const navigate=useNavigate();
    return (
        <div className='navbar_outer'>
            <div className='navbar_inner'>
                <div className='nav_logo'>
                    <div className='nav_logo_inner' onClick={()=>{navigate("/home")}}>PROPERTY  
                    <FontAwesomeIcon icon={faHouse} size="l" color="black" className='nav__icon'/>
                    </div>

                    {/* <FontAwesomeIcon size="xl" color="black" icon="fa-solid fa-house" /> */}

                       

                </div>
                <div className='nav_util'>
                    <div className='nav_util_icons'>favourites
                    <FontAwesomeIcon icon={faBookmark} size="l" color="black" className='nav__icon'/>
                    </div>
                    <div  onClick={()=>{navigate("/profile")}}>
                        profile
                        <FontAwesomeIcon icon={faUser} size="l" color="black" className='nav__icon'/>
                    </div>
                </div>



            </div>
        </div>
    )
}
export default Navbar;