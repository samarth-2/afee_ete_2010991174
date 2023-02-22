import './index.css';
import instagram from "../../assets/image/footer/instagram.svg";
import facebook from "../../assets/image/footer/facebook.svg";
import twitter from "../../assets/image/footer/twitter.svg";
import reddit from "../../assets/image/footer/reddit.svg";
const Footer =()=>{
    return (
        <>
        <div className='footer__outer'>
            <div className='footer__inner'>
                <div className='footer__left'>
                    <div className='footer__left__social'>
                        <div style={{fontSize:"2rem",color:"white",fontWeight:"600"}}>
                            Our Social Handles
                        </div>
                        <div className='footer__left__img'>
                            <img src={instagram}/>
                            <img src={facebook}/>
                            <img src={twitter}/>
                            <img src={reddit}/>
                        </div>
                    </div>
                    <div className='footer__left__desc'>
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been
                     the industry's standard dummy text ever since the 1500s,
                    </div>
                </div>
                <div className='footer__right'>
                    <div className='footer__right__title'>Send Us Your Feedback</div>
                    <input type='text' placeholder='Your Name' style={{width:"50%",marginTop:"1rem",marginBottom:"1rem",padding:"5px"}} className='form-control'/>
                    <input type='text' placeholder='Your Email' style={{width:"50%",marginTop:"1rem",marginBottom:"1rem",padding:"5px"}} className='form-control'/>
                    <div className='footer__right__button'>Submit</div>
                </div>
            </div>

        </div>
        </>
    )    
}


export default Footer;
