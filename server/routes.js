const express = require("express")
const TEST = require("./models/Test")
const USER=require("./models/user");
const router = express.Router()

// Get all posts
router.get("/test", async (req, res) => {
	// var ele=await TEST.insertMany([{id:1,name:"hello1"},{id:2,name:"hello2"}])
	var ele=await TEST.find({id:"1"})
	console.log(ele[0]._id)
	res.send(ele)
})

router.post("/post/sign-up",async (req,res)=>{
	var email=req.body.email
	var name=req.body.name
	var pass=req.body.pass
	console.log(email);
	try{
		const ele=await USER.findOne({user_email:email}).exec()
		console.log(ele);
		if(ele!==null){
			res.status(200).send("email already exists");
		}
		else{
			try{

				// const ele= await USER.insertMany([{user_name:name,user_email:email,user_pass:pass}]);
				const li= await USER.insertMany([{user_name:name,user_email:email,user_pass:pass}]);
				console.log(li);
				res.status(200).send("account created successfully")
			}
			catch{
				res.status(404).json({message:error.message});
			}
		}
	}
	catch{

	}
})




router.post("/post/sign-in", async (req, res) => {
	var email=req.body.email;
	var pass=req.body.pass;
	try 
	{
        const ele=await USER.findOne({user_email:email,user_password:pass}).exec();
        if(ele!==null)
		{
			res.status(200).send("loginSuccess");
		}
		else
		{
			res.status(200).send("loginFailed");
		}
    }
	catch (error) 
	{
        res.status(404).json({message:error.message});
    }
})








module.exports = router