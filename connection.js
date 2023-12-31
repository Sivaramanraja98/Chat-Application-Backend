const mongoose = require("mongoose");

//Database connection
module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(process.env.MONGOURL, connectionParams);
		console.log("Connected to database successfully......");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};