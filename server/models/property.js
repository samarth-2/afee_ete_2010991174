const mongoose = require("mongoose");
const schema = mongoose.Schema;

let ele = new schema({
	title:{
		type:String
	},
	rating:{
		type:String
	},
    
    prop_type:{
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
    
    dealer:{
        type:String
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
    },
    image:{
        type:String
    }

})

module.exports = mongoose.model("property", ele)