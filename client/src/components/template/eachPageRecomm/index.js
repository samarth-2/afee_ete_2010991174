import './index.css';
import Navbar from '../navbar';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import LoadingScreen from '../../atom/loadingScreen';
import RecommCard1 from './../../atom/reccomcard';

const EachPageRecomm=(props)=>{

    const[Loading,setLoading]=useState(true);
    const[Display,setDisplay]=useState([])
  

    useEffect(() => {
      Axios.get('http://localhost:5000/home/recommended/get-data',
      {
          name:"check",
      }).then((res)=>{
        setDisplay(res.data);
        setLoading(false)
      });
    }, []);


return (
    <>
        <div className='each__outer'>
            <Navbar />
            <div className='each__inner'>
                <div className='each__inner__head'>
                    Recommended Properties
                </div>
                <div className='each__inner__smallhead'>
                    Handpicked projects for you
                </div>
                {
                Loading ? (
                    <div className='loading__outer' style={{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <LoadingScreen/>    
                    </div>
                    
                ):(
                    <div className='each__inner__card' style={{width:"100%",marginBottom:"none",justifyContent:"space-around",overflowY:"scroll",height:"fit-content",display:'flex',flexWrap:"wrap"}}>
                    {Display.map((ele)=>{
                            const{id,image,title,description,price,area,bhk,type_of,
                                construction_status,furnished_status,verefied,global_type,purchase_status}=ele;
                            return(
                                <RecommCard1 id={id} image={image} title={title} description={description} price={price} bhk={bhk} eachPageFlag={1}/>
                            )
                        })}  
                    </div>
                )
            }
            </div>
        </div>

    </>
);
}

export default EachPageRecomm;