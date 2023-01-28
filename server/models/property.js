const mongoose = require("mongoose");
const schema = mongoose.Schema;

let ele = new schema({
	title:{
		type:String
	},
	rating:{
		type:String
	},
    location:{
		type:String
	},
    city:{
		type:String
	},
    state:{
		type:String
	},
    furn_status:{
		type:String
	},
    price:{
		type:String
	},
    area:{
		type:String
	},
    bhk:{
		type:String
	},
    verified:{
		type:String
	},
    dealer:{
        type:[Object]
    }
    ,
    desc:{
        type:String
    },
    construction_status:{
        type:String
    }
    ,
    purchase_status:{
        type:String
    }

})

module.exports = mongoose.model("property", ele)