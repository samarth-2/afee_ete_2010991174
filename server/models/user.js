
const mongoose = require("mongoose");

const schema = mongoose.Schema;

let ele = new schema({
	
    user_name:{
		type:String
	},
    
    user_email:{
		type:String
	},
    user_contact:{
		type:String
	},
    user_pass:{
		type:String
	},
    user_occupation:{
		type:String
	},
    user_income:{
		type:String
	},
    user_address:{
		type:String
	},
    user_acc_type:{
		type:String
	},
    user_updated:{
		type:String
	},
    user_about:{
		type:String
	},
    user_rating:{
		type:String
	},
    user_sold_prop:{
		type:String
	},
    user_fav_prop:{
        type:[Object]
    },
    user_listed_prop:{
        type:[Object]
    }
})

module.exports = mongoose.model("user", ele)