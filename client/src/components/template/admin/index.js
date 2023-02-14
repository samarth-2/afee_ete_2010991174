import './index.css';
import Navbar from './../../template/navbar';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import LoadingScreen from './../../atom/loadingScreen';
import SearchCard1 from '../../atom/searchCard1';
import Login from './../login';

const Admin =(props)=>{

    const [dataloading, setDataloading] = useState(true);
    const [userData, setUserdata] = useState([]);

    const[user,setUser]=useState();
    const[pass,setPass]=useState();

    function submitclicked(){
        Axios.post('http://localhost:5000/api/admin/get-data',
    {
        email: props.LoggedIn,
    }).then((res) => {
        
        setUserdata(res.data.data)
        
       
        
        
    });
    }
    

    
    return(
        <>
        
        </>
    )
}

export default Admin;