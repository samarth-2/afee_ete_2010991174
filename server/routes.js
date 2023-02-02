const express = require("express")
const TEST = require("./models/Test")
const USER=require("./models/user");
const router = express.Router()
const Logger=require('./connect/logg')
const bcrypt = require('bcrypt');



// Get all posts
router.get("/test", async (req, res) => {
	// var ele=await TEST.insertMany([{id:1,name:"hello1"},{id:2,name:"hello2"}])
	var ele=await TEST.find({id:"1"})
	console.log(ele[0]._id)
	res.send(ele)
})
router.post("/post/sign-up",async (req,res)=>{
	Logger.Logg.info("-----------server/post/sign-up")
	var email=req.body.email
	var name=req.body.name
	
	console.log(email);

	const omega = bcrypt.genSaltSync(10);
	const pass = bcrypt.hashSync(req.body.pass, omega);
	try{
		const ele=await USER.findOne({user_email:email}).exec()
		console.log(ele);
		if(ele!==null){
			Logger.Logg.error("Existing user!!")
			res.status(200).send({message:"alreadyExist",data:false});
		}
		else{
			try{

				
				const li= await USER.insertMany([{user_name:name,user_email:email,user_pass:pass}]);
				const ele1=await USER.findOne({user_email:email}).exec();
				res.status(200).send({message:"createdSuccess",data:email})
				Logger.Logg.success("User Created Success!!")
			}
			catch{
				res.status(404).json({message:error.message});
				Logger.Logg.error(error.message);
			}
		}
	}
	catch{
		Logger.Logg.error(error.message);
        res.status(404).json({message:error.message});
	}
})




router.post("/post/sign-in", async (req, res) => {
	Logger.Logg.info("-----------server/post/sign-in")
	var email=req.body.email;
	var pass=req.body.pass;
	try 
	{
        const ele=await USER.findOne({user_email:email}).exec();
        if(ele!==null)
		{
			if (bcrypt.compareSync(pass,ele.user_pass))
			{
				res.status(200).send({message:"loginSuccess",data:email});
				Logger.Logg.success("User LogIn Success!!")
			}
			else
			{
				Logger.Logg.error("User LogIn Failed!!")
				res.status(200).send({message:"loginFailed",data:false});
			}
		}
		else
		{
			Logger.Logg.error("User LogIn Failed!!")
			res.status(200).send({message:"loginFailed",data:false});
		}
    }
	catch (error) 
	{
        Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
})








module.exports = router