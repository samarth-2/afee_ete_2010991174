import Navbar from '../navbar';
import './index.css';
import { Parallax } from 'react-parallax';
import back9 from './../../assets/image/back9.jpg';
import Carousel from "react-multi-carousel";
const Home = (props) => {

  const responsive = {
    desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
    },
    tablet: {
    breakpoint: { max: 1024, min: 750 },
    items: 1,
    slidesToSlide: 1
    },
    mobile: {
    breakpoint: { max: 749, min: 0 },
    items: 1,
    slidesToSlide: 1
    }
  };



  return (

    <div className='home__outer'>
      <Navbar  />
      <div className='home__inner'>

        <div className='home_header'>
          <div className='home_header_text'>FIND YOUR DREAM PLACE</div>

        </div>

        <div className='home_search'>
          <div className='home_search__inner'>
                searchbox
          </div>

        </div>
        <div className='home__hot'>
        {/* <Carousel 
              responsive={responsive} 
              draggable
              pauseOnHover
              infinite
              showDots={true}
              removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                  {
                    homecarddata1.map((ele)=>{
                      const{id,img,heading}=ele;
                      return(
                        <HotCard id={id} img={img} heading={heading} num={id+1}/>
                      )
                    })
                  }
              </Carousel> */}
        </div>

      </div>


    </div>

  );
}

export default Home;