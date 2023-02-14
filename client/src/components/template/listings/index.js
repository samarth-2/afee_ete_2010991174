import './index.css';
import Navbar from './../../template/navbar';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import LoadingScreen from './../../atom/loadingScreen';
import SearchCard1 from '../../atom/searchCard1';
const Listings=(props)=>{


    const navigate = useNavigate();
    const [dataloading, setDataloading] = useState(true);
    const [userData, setUserdata] = useState([]);


    function GetData(){

        setDataloading(true);
        Axios.post('http://localhost:5000/api/listings/get-data',
            {
                email: props.LoggedIn,
            }).then((res) => {
                console.log(res.data.data)
                setUserdata(res.data.data)
               
                setDataloading(false)
            });
    }



    useEffect(() => {
        if (props.LoggedInStatus === true) {
            GetData();
        }
        else {
            navigate("/home")
        }
    }, []);
    


    return(
        <>
       <Navbar LoggedIn={props.LoggedIn} LoggedInStatus={props.LoggedInStatus} />
        <div className="listing_outer">
            <div className="listing_inner" >
                <div className='listings_heading'>
                    YOUR LISTINGS
                </div>
                {

                    dataloading ? (
                        <div className='loading__outer' style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div className='loading__outer__inner'>
                                <LoadingScreen />
                            </div>

                        </div>
                    ) : (

                        <div className='listing_list'>
                            {userData.map((ele)=>{
                        const {id,image,title,desc,price,area,bhk,prop_type,
                        construction_status,furn_status,purchase_status}=ele;

                    var li=[];
                    li.push(prop_type);
                    li.push(construction_status);
                    li.push(furn_status);
                   
                    li.push(purchase_status);


                    return(
                        <SearchCard1 id={id} image={image} title={title} description={desc} price={price} area={area}
                        bhk={bhk} li={li} valField={props.valField}/>
                    )
                    })}
                        
                        
                        
                        
                        
                        
                        </div>



                    )}
            </div>
        </div>
        
        </>
    )
}

export default Listings;