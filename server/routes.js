const express = require("express")
const TEST = require("./models/Test")
const USER = require("./models/user");
const router = express.Router()
const Logger = require('./connect/logg')
const bcrypt = require('bcrypt');
const PROPERTY = require('./models/property');


// Get all posts
router.get("/test", async (req, res) => {
	// var ele=await TEST.insertMany([{id:1,name:"hello1"},{id:2,name:"hello2"}])
	var ele = await TEST.find({ id: "1" })
	console.log(ele[0]._id)
	res.send(ele)
})
router.post("/post/sign-up", async (req, res) => {
	Logger.Logg.info("-----------server/post/sign-up")
	var email = req.body.email
	var name = req.body.name
	var atype = req.body.atype
	console.log(email);

	const omega = bcrypt.genSaltSync(10);
	const pass = bcrypt.hashSync(req.body.pass, omega);
	try {
		const ele = await USER.findOne({ user_email: email }).exec()
		console.log(ele);
		if (ele !== null) {
			Logger.Logg.error("Existing user!!")
			res.status(200).send({ message: "alreadyExist", data: false });
		}
		else {
			try {


				const li = await USER.insertMany([{ user_name: name, user_email: email, user_pass: pass, user_acc_type: atype }]);
				const ele1 = await USER.findOne({ user_email: email }).exec();
				res.status(200).send({ message: "createdSuccess", data: email })
				Logger.Logg.success("User Created Success!!")
			}
			catch {
				res.status(404).json({ message: error.message });
				Logger.Logg.error(error.message);
			}
		}
	}
	catch {
		Logger.Logg.error(error.message);
		res.status(404).json({ message: error.message });
	}
})




router.post("/post/sign-in", async (req, res) => {
	Logger.Logg.info("-----------server/post/sign-in")
	var email = req.body.email;
	var pass = req.body.pass;
	try {
		const ele = await USER.findOne({ user_email: email }).exec();
		if (ele !== null) {
			if (bcrypt.compareSync(pass, ele.user_pass)) {
				res.status(200).send({ message: "loginSuccess", data: email });
				Logger.Logg.success("User LogIn Success!!")
			}
			else {
				Logger.Logg.error("User LogIn Failed!!")
				res.status(200).send({ message: "loginFailed", data: false });
			}
		}
		else {
			Logger.Logg.error("User LogIn Failed!!")
			res.status(200).send({ message: "loginFailed", data: false });
		}
	}
	catch (error) {
		Logger.Logg.error(error.message)
		res.status(404).json({ message: error.message });
	}
})

router.post("/profile/get-data", async (req, res) => {
	Logger.Logg.info("-----------server/profile/get-data")
	var email = req.body.email;
	try {
		const ele = await USER.findOne({ user_email: email }).exec()
		if (ele !== null) {
			console.log(ele)
			res.status(200).send({ message: "found account", data: ele });
			Logger.Logg.success("profileFetchSuccess")

		}
		else {
			res.status(200).send({ message: "no account found", data: {} });
			Logger.Logg.success("profileFetchfailed")
		}


	}
	catch {
		Logger.Logg.error(error.message)
		res.status(404).json({ message: error.message });
	}
})


router.post("/profile/post-data", async (req, res) => {
	Logger.Logg.info("-----------server/profile/post-data")
	var email = req.body.email;
	var age = req.body.age;
	var address = req.body.address;
	var contact = req.body.contact;
	var sold = req.body.sold
	var exp = req.body.exp
	var occu = req.body.occu;
	var income = req.body.income;
	var about = req.body.about;
	try {
		const check_email = { user_email: email };
		const check_update =
		{
			user_updated: true,
			user_age: age,
			user_address: address,
			user_contact: contact,
			user_occu: occu,
			user_income: income,
			user_about: about,
			user_sold_prop: sold,
			user_exp: exp,
		}
		const ele = await USER.findOneAndUpdate(check_email, check_update);
		Logger.Logg.success("Successfull Updation")
		res.status(200).send({ message: "Success" })
	}
	catch (error) {
		Logger.Logg.error(error.message)
		res.status(404).json({ message: error.message });
	}
})

router.post("/postproperty/insert-data", async (req, res) => {
	var rating=req.body.rating;
	var email=req.body.email;
	var area=req.body.area;
	var price=req.body.price;
	var bhk=req.body.bhk;
	var furnished =req.body.furnished;
	var constructionStatus=req.body.constructionStatus;
	var title=req.body.title;
	var desc=req.body.desc;
	var image=req.body.image;
	var purchaseStatus=req.body.purchaseStatus;
	var typeOfProp=req.body.typeOfProp;

	console.log(desc);
	try {
		const pp = {
			title: title,
			rating: rating,
			prop_type: typeOfProp,
			furn_status: furnished,
			price: price,
			area: area,
			bhk: bhk,
			construction_status: constructionStatus,
			dealer: email,
			desc: desc,
			image: image,
			purchase_status: purchaseStatus,

		}
		const ele = await PROPERTY.insertMany([ {
			title: title,
			rating: rating,
			prop_type: typeOfProp,
			furn_status: furnished,
			price: price,
			area: area,
			bhk: bhk,
			construction_status: constructionStatus,
			dealer: email,
			desc: desc,
			image: image,
			purchase_status: purchaseStatus,

		}]);
		console.log(ele);
		const check_email22 = { user_email: email };
		const check_update22 =
		{
			$push:
				{ user_listed_prop: ele }
		}

		const ele44 = await USER.findOneAndUpdate(check_email22, check_update22);
		Logger.Logg.success("Property Posted Successfully");
		res.status(200).send({ message: "Success" });

	}
	catch (error) {
		Logger.Logg.error(error.message)
		res.status(404).json({ message: error.message });
	}


})


router.post("/search/get-data", async (req, res) => {
	Logger.Logg.info("-----------server/profile/get-data")
	
	try {
		const ele = await PROPERTY.find().exec()
		if (ele !== null) {
			console.log(ele)
			res.status(200).send({ message: "found account", data: ele });
			Logger.Logg.success("profileFetchSuccess")

		}
		else {
			res.status(200).send({ message: "no account found", data: [] });
			Logger.Logg.success("profileFetchfailed")
		}


	}
	catch {
		Logger.Logg.error(error.message)
		res.status(404).json({ message: error.message });
	}
})


router.post("/listings/get-data", async (req, res) => {
	Logger.Logg.info("-----------server/listings/get-data")
	var email=req.body.email;
	try {
		const ele = await PROPERTY.find({ dealer: email }).exec();
		if (ele !== null) {
			console.log(ele)
			res.status(200).send({ message: "found account", data: ele });
			Logger.Logg.success("profileFetchSuccess")
			
		}
		else {
			res.status(200).send({ message: "no account found", data: [] });
			Logger.Logg.success("profileFetchfailed")
		}


	}
	catch {
		Logger.Logg.error(error.message)
		res.status(404).json({ message: error.message });
	}
})



router.post("/favourites/get-data", async (req, res) => {
	Logger.Logg.info("-----------server/favourites/get-data")
	var email=req.body.email;
	try {
		const ele = await PROPERTY.find().exec();
		if (ele !== null) {
			console.log(ele)
			res.status(200).send({ message: "found account", data: ele });
			Logger.Logg.success("profileFetchSuccess")
			
		}
		else {
			res.status(200).send({ message: "no account found", data: [] });
			Logger.Logg.success("profileFetchfailed")
		}


	}
	catch {
		Logger.Logg.error(error.message)
		res.status(404).json({ message: error.message });
	}
})

router.post("/admin/get-data", async (req, res) => {
	Logger.Logg.info("-----------server/favourites/get-data")
	var email=req.body.email;
	try {
		const ele = await USER.find().exec();
		if (ele !== null) {
			console.log(ele)
			res.status(200).send({ message: "found account", data: ele });
			Logger.Logg.success("profileFetchSuccess")
			
		}
		else {
			res.status(200).send({ message: "no account found", data: [] });
			Logger.Logg.success("profileFetchfailed")
		}


	}
	catch {
		Logger.Logg.error(error.message)
		res.status(404).json({ message: error.message });
	}
})

module.exports = router