import './index.css';
import Navbar from '../navbar';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import LoadingScreen from './../../atom/loadingScreen';
import userimage from './../../assets/image/userimage.png';
const Profile = (props) => {

    const navigate = useNavigate();

    console.log(props.LoggedIn);

    const [flag, setFlag] = useState({
        before: "none",
        after: "flex"
    })
    const [flag2, setFlag2] = useState("none");

    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [income, setIncome] = useState("");
    const [occu, setOccu] = useState("");
    const [age, setAge] = useState(0);

    const [about, setAbout] = useState("");
    const [exp, setExp] = useState("");
    const [sold, setSold] = useState("");
    // const[gender,setGender]=useState("");
    const [userData, setUserdata] = useState({})
    const [userLoading, setUserLoading] = useState(true);



    function GetProfile() {
        setUserLoading(true);
        Axios.post('http://localhost:5000/api/profile/get-data',
            {
                email: props.LoggedIn,
            }).then((res) => {
                console.log(res.data.data)
                setUserdata(res.data.data)
                console.log(userData)
                if (res.data.data.user_updated === true) {
                    setFlag({ before: "flex", after: "none" });
                }
                if (res.data.data.user_acc_type === "dealer") {
                    setFlag2("flex");
                    console.log("nigggaaaaaaa")
                }
                setUserLoading(false)
            });
    }
    useEffect(() => {
        if (props.LoggedInStatus === true) {
            GetProfile();
        }
        else {
            navigate("/auth")
        }
    }, []);





    function saveInfoClicked() {
        if (contact.length !== 10) {
            alert("Fill Contact Correctly!! (10 digits)")
            return;
        }

        var check = /^[#.0-9a-zA-Z\s,-]+$/;
        if (check.test(address) === false) {
            alert("Fill Address Correctly!!")
            return;
        }

        if (occu === "") {
            alert("Fill occupation Correctly!!")
            return;
        }

        if (income === "") {
            alert("Fill Sallary Correctly!!")
            return;
        }

        if ((age <= 19 || age >= 100 || age === "")) {
            alert("Fill Age Correctly!!")
            return;
        }

        

        if (userData.user_acc_type === "dealer") {
            if (about === "") {
                alert("Fill About Correctly!!")
                return;
            }
            if (exp === "") {
                alert("Fill experience Correctly!!")
                return;
            }
            if (sold === "") {
                alert("Fill sold properties Correctly!!")
                return;
            }
        }





        Axios.post('http://localhost:5000/api/profile/post-data',
            {

                address: address,
                contact: contact,
                occu: occu,
                income: income,
                about: about,
                email: props.LoggedIn,
                sold: sold,
                exp: exp,
                age: age,



            }).then((res) => {
                GetProfile()
            });
    }


    function LogoutClicked() {
        props.LoggedInStatusCheck(false, "");
        navigate('/home')
    }









    return (
        <>
            <Navbar LoggedIn={props.LoggedIn} LoggedInStatus={props.LoggedInStatus} />
            <div className='profile_outer'>


                {

                    userLoading ? (
                        <div className='loading__outer' style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div className='loading__outer__inner'>
                                <LoadingScreen />
                            </div>

                        </div>
                    ) : (
                        <div className='profile_inner'>
                            <div className='profile_left'>
                                <div className='profile_left_menu'>
                                    <div style={{cursor:'pointer'}} onClick={() => { navigate("/profile") }}>
                                        PROFILE
                                    </div>

                                    <div  style={{ display: flag2, cursor:'pointer' }} onClick={() => { navigate("/postproperty") }}>
                                        POST PROPERTY
                                    </div>
                                    <div  style={{ display: flag2, cursor:'pointer' }} onClick={() => { navigate("/listings") }}>
                                        YOUR LISTINGS
                                    </div>
                                    <div style={{cursor:'pointer'}} onClick={() => { navigate("/favourites") }}>
                                        NEW LISTINGS
                                    </div>

                                    <div style={{cursor:'pointer'}} onClick={() => { LogoutClicked() }}>
                                        LOG-OUT
                                    </div>
                                </div>
                            </div>

                            <div className='profile_right'>
                                <div className='profile_right_image'>
                                    <img src={userimage} className='profile_userimagepfp' />
                                </div>
                                <div className='profile_right_name'>
                                    <div className='profile_right_fullname'>
                                        <div className='profile_right_fullname_title' >
                                            FULLNAME
                                        </div>
                                        <div className='profile_right_fullname_field'>
                                            {userData.user_name}
                                        </div>
                                    </div>
                                    <div className='profile_right_fullname'>
                                        <div className='profile_right_fullname_title'>
                                            EMAIL
                                        </div>
                                        <div className='profile_right_fullname_field'>
                                            {userData.user_email}
                                        </div>
                                    </div>
                                </div>
                                <div className='profile_right_name'>
                                    <div className='profile_right_fullname'>
                                        <div className='profile_right_fullname_title' >
                                            CONTACT
                                        </div>
                                        <div className='profile_right_fullname_field'>
                                            <div style={{ display: flag.before }}>
                                                {userData.user_contact}
                                            </div>
                                            <div style={{ display: flag.after }}>
                                                <input placeholder='Enter Contact no.' onChange={(e) => { setContact(e.target.value) }} className='profile_inputfield' type="number" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className='profile_right_fullname'>
                                        <div className='profile_right_fullname_title' >
                                            ADDRESS
                                        </div>
                                        <div className='profile_right_fullname_field'>
                                            <div style={{ display: flag.before }}>
                                                {userData.user_address}
                                            </div>
                                            <div style={{ display: flag.after }}>
                                                <input onChange={(e) => { setAddress(e.target.value) }} type="text" className='profile_inputfield' placeholder='Enter your address' />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='profile_right_name'>
                                    <div className='profile_right_fullname'>
                                        <div className='profile_right_fullname_title' >
                                            OCCUPATION
                                        </div>
                                        <div className='profile_right_fullname_field'>
                                            <div style={{ display: flag.before }}>
                                                {userData.user_occu}
                                            </div>
                                            <div style={{ display: flag.after }}>
                                                <input placeholder='Enter Your Occupation' onChange={(e) => { setOccu(e.target.value) }} className='profile_inputfield' type="text" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className='profile_right_fullname'>
                                        <div className='profile_right_fullname_title' >
                                            INCOME
                                        </div>
                                        <div className='profile_right_fullname_field'>
                                            <div style={{ display: flag.before }}>
                                                {userData.user_income}LAC
                                            </div>
                                            <div style={{ display: flag.after }}>
                                                <input onChange={(e) => { setIncome(e.target.value) }} type="number" className='profile_inputfield' placeholder='Enter your Income in Lac' />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='profile_right_name'>
                                    <div className='profile_right_fullname'>
                                        <div className='profile_right_fullname_title' >
                                            AGE
                                        </div>
                                        <div className='profile_right_fullname_field'>
                                            <div style={{ display: flag.before }}>
                                                {userData.user_age}
                                            </div>
                                            <div style={{ display: flag.after }}>
                                                <input placeholder='Enter Your Age' onChange={(e) => { setAge(e.target.value) }} className='profile_inputfield' type="number" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className='profile_right_fullname'>
                                        <div className='profile_right_fullname_title' >
                                            ACOUNT TYPE
                                        </div>
                                        <div className='profile_right_fullname_field'>
                                                {userData.user_acc_type}

                                        </div>

                                    </div>


                                </div>
                                <div style={{ display: flag2 }} className='profile_right_name'>
                                    <div className='profile_right_fullname'>
                                        <div className='profile_right_fullname_title' >
                                            ABOUT
                                        </div>
                                        <div className='profile_right_fullname_field'>
                                            <div style={{ display: flag.before }}>
                                                {userData.user_about}
                                            </div>
                                            <div style={{ display: flag.after }}>
                                                <input className="Tell Us About Yourself" onChange={(e) => { setAbout(e.target.value) }} className='profile_inputfield' type="text" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className='profile_right_fullname'>
                                        <div className='profile_right_fullname_title' >
                                            YEARS OF EXPERIENCE
                                        </div>
                                        <div className='profile_right_fullname_field'>
                                            <div style={{ display: flag.before }}>
                                                {userData.user_exp} years
                                            </div>
                                            <div style={{ display: flag.after }}>
                                                <input onChange={(e) => { setExp(e.target.value) }} type="number" className='profile_inputfield' placeholder='Enter your Experience' />
                                            </div>
                                        </div>

                                    </div>


                                </div>
                                <div style={{ display: flag2 }} className='profile_right_name'>
                                    <div className='profile_right_fullname'>
                                        <div className='profile_right_fullname_title' >
                                            PROPERTIES SOLD
                                        </div>
                                        <div className='profile_right_fullname_field'>
                                            <div style={{ display: flag.before }}>
                                                {userData.user_sold_prop}
                                            </div>
                                            <div style={{ display: flag.after }}>
                                                <input placeholder='Enter Sold Properties' onChange={(e) => { setSold(e.target.value) }} className='profile_inputfield' type="number" />
                                            </div>
                                        </div>

                                    </div>




                                </div>
                                <div className='profile_right_name'>
                                    <div style={{ display: flag.after }} onClick={() => {saveInfoClicked() }} className='profile_right_submit'>
                                        SUBMIT
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </>
    )
}

export default Profile;