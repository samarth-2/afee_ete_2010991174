import './index.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Navbar = (props) => {
    const navigate=useNavigate();

    const [color,setColor]=useState(false);

    const changeColor=()=>{
        if(window.scrollY>=50){
            setColor(true);
        }
        else{
            setColor(false)
        }
    }

    window.addEventListener('scroll',changeColor);

    return (
        <div className={color ?'navbar_outer navback': 'navbar_outer' }>
            <div className='navbar_inner'>
                <div className='nav_logo'>
                    <div className='nav_logo_inner' onClick={()=>{navigate("/home")}}>PROPERTY  
                    <FontAwesomeIcon icon={faHouse} size="lg" color="black" className='nav__icon'/>
                    </div>

                    {/* <FontAwesomeIcon size="xl" color="black" icon="fa-solid fa-house" /> */}

                       

                </div>
                <div className='nav_util'>
                    <div className='nav_util_icons'>
                    <FontAwesomeIcon style={{cursor:'pointer'}} icon={faBookmark} size="lg" color="black" className='nav__icon' onClick={()=>{navigate("/favourites")}}/>
                    </div>
                    {
                    props.LoggedInStatus ? (
                        <FontAwesomeIcon style={{cursor:'pointer'}} icon={faUser} size="lg" color="black" className='nav__icon' onClick={()=>{navigate("/profile")}}/> 
                    ):(
                        <FontAwesomeIcon style={{cursor:'pointer'}} icon={faRightToBracket} size="lg" color="black" className='nav__icon' onClick={()=>{navigate("/login")}}/>  
                    )
                    }
                </div>



            </div>
        </div>
    )
}
export default Navbar;