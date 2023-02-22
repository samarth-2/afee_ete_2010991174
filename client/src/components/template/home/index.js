import Navbar from '../navbar';
import './index.css';
import { Parallax } from 'react-parallax';
import back9 from './../../assets/image/back9.jpg';
import Carousel from "react-multi-carousel";
import LoadingScreen from '../../atom/loadingScreen';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import HomeData from './../../assets/store/homeData';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import Footer from './../footer';

// Images
import sectiontwoBG from "./../../assets/image/ads2.png"
import sectiontwoFG from "./../../assets/image/back1.jpg"
// import ExpertDisplay from './../expertDisplay';
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

    const navigate = useNavigate();

    const [filterDisplay, setFilterDisplay] = useState({
        budget: "none",
        // bedroom: "none",
        construction: "none",
        type: "none",
    });









    try {
        console.log(props.val);
    }
    catch (err) {
        props.changeSetVal("Location");
    }
    try {
        console.log(props.valField);
    }
    catch (err) {
        props.changeSetValField("Landmark,Locality");
    }

    function placebar() {
        var li;
        if (props.val === "Chandigarh") {
            li = HomeData.Chandigarh;
        }
        else if (props.val === "Panchkula") {
            li = HomeData.Panchkula;
        }
        else if (props.val === "Zirakpur") {
            li = HomeData.Zirakpur;
        }
        else if (props.val === "Ambala") {
            li = HomeData.Ambala;
        }
        else if (props.val == "Mohali") {
            li = HomeData.Mohali;
        }
        else {
            li = HomeData.null;
        }
        return (
            <Autocomplete
                disablePortal
                defaultValue={null}
                id="combo-box-demo"
                options={li}
                value={props.valField}
                onChange={(event: any, newVal: string | null) => props.changeSetValField(newVal.label)}
                renderInput={(params) => <TextField {...params} label="Locality, Sector" />}
            />
        )
    }



    function valuetext(value) {
        return `${value}`;
    }

    function searchClicked() {
        if(props.LoggedInStatus==false){
            navigate('/login');
            return;
        }
        if (props.val === "" || props.valField === "") {
            console.log("error");
        }
        else {
            navigate('/search')
        }
    }


    function filterEachClicked(x) {
        if (x === "Budget") {
            setFilterDisplay({
                budget: "flex",
                bedroom: "none",
                construction: "none",
                type: "none",
            })
        }
        // else if (x === "Bedroom") {
        //     setFilterDisplay({
        //         budget: "none",
        //         bedroom: "flex",
        //         construction: "none",
        //         type: "none",
        //     })
        // }
        else if (x === "Construction Status") {
            setFilterDisplay({
                budget: "none",
                bedroom: "none",
                construction: "flex",
                type: "none",
            })
        }
        else if (x === "Type Of") {
            setFilterDisplay({
                budget: "none",
                bedroom: "none",
                construction: "none",
                type: "flex",
            })
        }

    }

    return (
        <div className='home__outer'>
            <div className='home__inner'>
                <Navbar LoggedIn={props.LoggedIn} LoggedInStatus={props.LoggedInStatus} />

                <div className='home_header'>
                    <div className='home_header_text'>
                        FIND YOUR<br></br> DREAM PLACE
                    </div>
                    {/* <HomeSection1/> */}


                    {/* <div className='loading__outer' style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                           <div className='loading__outer__inner'>
                               <LoadingScreen />
                           </div>

                       </div> */}

                    <div className='home__inner__seaction2'>
                        <div className='home__inner__seaction2__inner'>
                            <div className='home__inner__seaction2__inner__top'>
                                {HomeData.search_panel.map((ele) => {
                                    const { id, name } = ele;
                                    return (
                                        <div key={id} className='home__inner__seaction2__inner__top__each'>
                                            {name}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='home__inner__seaction2__inner__bottom'>
                                <div className='home__inner__seaction2__inner__bottom__select'>
                                    <Autocomplete
                                        disablePortal
                                        defaultValue={null}
                                        id="combo-box-demo"
                                        options={HomeData.select_field}
                                        value={props.val}
                                        onChange={(event: any, newVal: string | null) => props.changeSetVal(newVal.label)}
                                        renderInput={(params) => <TextField {...params} label="Place" />}
                                    />
                                </div>
                                <div className='home__inner__seaction2__inner__bottom__field'>
                                    {placebar()}
                                </div>
                                <div className='home__inner__seaction2__inner__bottom__button' onClick={() => { searchClicked() }}>
                                    Search
                                </div>
                            </div>
                            <div className='home__inner__seaction2__inner__bottom__under'>
                                {HomeData.filter_panel.map((ele) => {
                                    const { id, name, img } = ele;
                                    return (
                                        <div key={id} className='home__inner__seaction2__inner__top__each2' onClick={() => { filterEachClicked(name) }}>
                                            {name} {'\u00A0'} {'\u00A0'} <img src={img} style={{ width: "10px", height: "6px" }} />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='home__inner__seaction2__inner__bottom__under__all' style={{ display: filterDisplay.budget }}>
                                <div className='home__inner__seaction2__inner__bottom__under__all__head'>
                                    Select Price Range
                                </div>
                                <div className='home__inner__seaction2__inner__bottom__under__all__value'>
                                    {props.valueBudget[0]}{'\u00A0'}Cr {'\u00A0'} - {'\u00A0'} {props.valueBudget[1]}{'\u00A0'}Cr
                                </div>
                                <Slider
                                    value={props.valueBudget}
                                    onChange={props.handleChangeSlider}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    min={1}
                                    max={50}
                                />
                            </div>
                            {/* <div className='home__inner__seaction2__inner__bottom__under__all2' style={{ display: filterDisplay.bedroom }}>
                                <div className='home__inner__seaction2__inner__bottom__under__all__head' style={{ marginBottom: "1rem" }}>
                                    Number of Bedrooms
                                </div>
                                <FormGroup aria-label="position" row>
                                    {HomeData.check_panel.map((ele) => {
                                        const { id, name } = ele;
                                        return (
                                            <FormControlLabel
                                                key={id}
                                                value={name}
                                                checked={props.checkArr[id]}
                                                control={<Checkbox />}
                                                onChange={(e) => { props.handleChangeCheckbox(id, e.target.checked) }}
                                                label={name}
                                                labelPlacement="end"
                                            />
                                        )
                                    })}
                                </FormGroup>
                            </div> */}
                            <div className='home__inner__seaction2__inner__bottom__under__all2' style={{ display: filterDisplay.construction }}>
                                <div className='home__inner__seaction2__inner__bottom__under__all__head' style={{ marginBottom: "1rem" }}>
                                    Construction Status
                                </div>
                                <FormGroup aria-label="position" row>
                                    {HomeData.check_panel_construction.map((ele) => {
                                        const { id, name } = ele;
                                        return (
                                            <FormControlLabel
                                                key={id}
                                                value={name}
                                                checked={props.constructionArr[id]}
                                                control={<Checkbox />}
                                                onChange={(e) => { props.handleChangeCheckboxConstruction(id, e.target.checked) }}
                                                label={name}
                                                labelPlacement="end"
                                            />
                                        )
                                    })}
                                </FormGroup>
                            </div>
                            <div className='home__inner__seaction2__inner__bottom__under__all3' style={{ display: filterDisplay.type, height: '10rem' }}>
                                <div className='home__inner__seaction2__inner__bottom__under__all__head' style={{ marginBottom: "1rem" }}>
                                    Type of Property
                                </div>
                                <FormGroup aria-label="position" row>
                                    {HomeData.check_panel_typeof.map((ele) => {
                                        const { id, name } = ele;
                                        return (
                                            <FormControlLabel
                                                key={id}
                                                value={name}
                                                checked={props.typeofArr[id]}
                                                control={<Checkbox />}
                                                onChange={(e) => { props.handleChangeCheckboxTypeof(id, e.target.checked) }}
                                                label={name}
                                                labelPlacement="end"
                                            />
                                        )
                                    })}
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <ExpertDisplay/> */}

            </div>

            <div className='home__sectionTwo'>
                <img src = {sectiontwoBG} style={{width:"1500px"}}></img>
                {/* <div className='foreground'>
                    <img src = {sectiontwoBG}></img>
                </div> */}
            </div>

            <div className='home__footer'>
                <Footer/>
            </div>
        </div>

    );
}

export default Home;