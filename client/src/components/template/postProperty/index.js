import Navbar from '../navbar';
import './index.css';
import { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import ProfileData from './../../assets/store/profileData';
import TextField from '@mui/material/TextField';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Postprop = (props) => {

    const navigate=useNavigate();



    const [furnished, setFurnished] = useState("");
    const [bhk, setBhk] = useState("");
    const [constructionStatus, setConstructionStatus] = useState("")
    const [purchaseStatus, setPurchaseStatus] = useState("")
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [descriptionProp, setDescriptionProp] = useState("")
    const [price, setPrice] = useState("")
    const [area, setArea] = useState("")

    const [typeOfProp, setTypeOfProp] = useState("")


    function checksubmit() {
        if (title === "") {

            alert("Fill title Correctly!!")
            return;

        }
        if (descriptionProp === "") {

            alert("Fill description Correctly!!")
            return;

        }
        if (area === "") {

            alert("Fill area Correctly!!")
            return;

        }
        if (price === "") {

            alert("Fill price Correctly!!")
            return;

        }
        if(purchaseStatus===""){
            alert("Fill Purchase Status Correctly!!")
            return;
        }
        if(constructionStatus===""){
            alert("Fill Construction Status Correctly!!")
            return;
        }
        if(furnished===""){
            alert("Fill Furnished Status Correctly!!")
            return;
        }
        if(bhk===""){
            alert("Fill BHK Correctly!!")
            return;
        }
        if(typeOfProp===""){
            alert("Fill Property Type  Correctly!!")
            return;
        }
        var check = image.split('\h');
        var imagess='h'+check[check.length-1];
        var rating=Math.floor(Math.random() * 5)+1;
        Axios.post("http://localhost:5000/api/postproperty/insert-data",{
            email:props.LoggedIn,
            title:title,
            desc:descriptionProp,
            area:parseFloat(area),
            bhk:parseInt(bhk.slice(0,1)),
            furnished:furnished,
            constructionStatus:constructionStatus,
            price:price.toString()+" Cr",
            purchaseStatus:purchaseStatus,
            typeOfProp:typeOfProp,
            image:imagess,
            rating:rating,
            
        }).then((res)=>{
            console.log("test")
            alert(res.data);
            navigate("/profile");       
        
        })}





    return (
        <div className='pp_outer'>
            <Navbar />
            <div className='pp_inner'>
                <div className='pp_inner_outer'>
                    <div className='pp_inner_title'>
                        LIST YOUR PROPERTY
                    </div>
                    <div className='pp_inner_container'>
                        <div className='pp_inner_container_ele'>
                            <div className='pp_box'>
                                <label className='pp_box_title'>
                                    title
                                </label>
                                <div className='pp_inner_field'>
                                    <input onChange={(e)=>setTitle(e.target.value)} className='pp_inner_field_inner' type="text" placeholder="Enter Title of property" />
                                </div>
                            </div>
                            <div className='pp_box'>
                                <label className='pp_box_title'>
                                    description
                                </label>
                                <div className='pp_inner_field'>
                                    <input onChange={(e)=>setDescriptionProp(e.target.value)} className='pp_inner_field_inner' type="text" placeholder='describe the property' />
                                </div>
                            </div>
                        </div>
                        <div className='pp_inner_container_ele'>
                            <div className='pp_box'>
                                <label className='pp_box_title'>
                                    Area
                                </label>
                                <div className='pp_inner_field'>
                                    <input onChange={(e)=>setArea(e.target.value)} className='pp_inner_field_inner' type="text" placeholder="in sqft" />
                                </div>
                            </div>
                            <div className='pp_box'>
                                <label className='pp_box_title'>
                                    Price
                                </label>
                                <div className='pp_inner_field'>
                                    <input onChange={(e)=>setPrice(e.target.value)} className='pp_inner_field_inner' type="text" placeholder="in Cr" />
                                </div>
                            </div>
                        </div>
                        <div className='pp_inner_container_ele'>
                            <div className='pp_box'>
                                <label className='pp_box_title'>
                                    Furnishing status
                                </label>
                                <div className='pp_inner_drop'>
                                    <Autocomplete
                                        disablePortal
                                        defaultValue={null}

                                        // style={{height:"fit-content",borderRadius:"5px",paddingLeft:"0px"}}
                                        fullWidth
                                        id="combo-box-demo"
                                        options={ProfileData.furnished_status}
                                        value={furnished}
                                        onChange={(event: any, newVal: string | null) => setFurnished(newVal.label)}
                                        renderInput={(params) => <TextField  {...params} label="" />}
                                    />
                                </div>
                            </div>
                            <div className='pp_box'>
                                <label className='pp_box_title'>
                                    BHK
                                </label>
                                <div className='pp_inner_drop'>
                                    <Autocomplete
                                        disablePortal
                                        defaultValue={null}

                                        // style={{height:"fit-content",borderRadius:"5px",paddingLeft:"0px"}}
                                        fullWidth
                                        id="combo-box-demo"
                                        options={ProfileData.check_panel}
                                        value={bhk}
                                        onChange={(event: any, newVal: string | null) => setBhk(newVal.label)}
                                        renderInput={(params) => <TextField  {...params} label="" />}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className='pp_inner_container_ele'>
                            <div className='pp_box'>
                                <label className='pp_box_title'>
                                    purchase status
                                </label>
                                <div className='pp_inner_drop'>
                                    <Autocomplete
                                        disablePortal
                                        defaultValue={null}

                                        // style={{height:"fit-content",borderRadius:"5px",paddingLeft:"0px"}}
                                        fullWidth
                                        id="combo-box-demo"
                                        options={ProfileData.purchase_status}
                                        value={purchaseStatus}
                                        onChange={(event: any, newVal: string | null) => setPurchaseStatus(newVal.label)}
                                        renderInput={(params) => <TextField  {...params} label="" />}
                                    />
                                </div>
                            </div>
                            <div className='pp_box'>
                                <label className='pp_box_title'>
                                    construction status
                                </label>
                                <div className='pp_inner_drop'>
                                    <Autocomplete
                                        disablePortal
                                        defaultValue={null}

                                        // style={{height:"fit-content",borderRadius:"5px",paddingLeft:"0px"}}
                                        fullWidth
                                        id="combo-box-demo"
                                        options={ProfileData.check_panel_construction}
                                        value={constructionStatus}
                                        onChange={(event: any, newVal: string | null) => setConstructionStatus(newVal.label)}
                                        renderInput={(params) => <TextField  {...params} label="" />}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className='pp_inner_container_ele'>
                            <div className='pp_box'>
                                <label className='pp_box_title'>
                                    type of property
                                </label>
                                <div className='pp_inner_drop'>
                                    <Autocomplete
                                        disablePortal
                                        defaultValue={null}

                                        // style={{height:"fit-content",borderRadius:"5px",paddingLeft:"0px"}}
                                        fullWidth
                                        id="combo-box-demo"
                                        options={ProfileData.check_panel_typeof}
                                        value={typeOfProp}
                                        onChange={(event: any, newVal: string | null) => setTypeOfProp(newVal.label)}
                                        renderInput={(params) => <TextField  {...params} label="" />}
                                    />
                                </div>
                            </div>
                            <div className='pp_box'>
                                <label className='pp_box_title'>
                                    image
                                </label>
                                <div className='pp_inner_drop'>
                                    <input accept="image/*" onChange={(e) => {setImage(e.target.value)}} className='pp_inner_field_file' type="file" />
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className='pp_inner_submit'>
                        <div onClick={() => { checksubmit() }} className='pp_inner_submit__inner'>
                            submit
                        </div>
                    </div>
                </div>



                {/* <div class="container">
                    <div class="selector">
                        <div class="selecotr-item">
                            <input type="radio" id="radio1" name="selector" class="selector-item_radio" />
                            <label for="radio1" class="selector-item_label">radio 1</label>
                        </div>
                        <div class="selecotr-item">
                            <input type="radio" id="radio2" name="selector" class="selector-item_radio" />
                            <label for="radio2" class="selector-item_label">radio 2</label>
                        </div>
                        <div class="selecotr-item">
                            <input type="radio" id="radio3" name="selector" class="selector-item_radio" />
                            <label for="radio3" class="selector-item_label">radio 3</label>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
export default Postprop;