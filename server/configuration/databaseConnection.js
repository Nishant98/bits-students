const mysql = require("mysql");

	var con = mysql.createConnection
	({
		host: "bits-students.c9yraifh43be.us-east-1.rds.amazonaws.com",
		port: 3306,
	  	user: "",
	  	password: "",
	  	database: "StudentInformation"
	});

   con.connect(function(err){
      if (err) throw err;
      console.log("Connected!");
   });

module.exports= con ; 
