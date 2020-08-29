const con = require('../configuration/databaseConnection.js');

function addStudent(studentId, studentName, cb){
	  var sql = "INSERT INTO students (studentId, studentName) VALUES ('"+studentId+"','"+studentName+"' )";
	  con.query(sql, function (err, result) {
	  	cb(err,result);
	  });
}

function getStudents(cb){
	var sql = "select * from students;";
	con.query(sql,function(err,result,fields){
	cb(err,result);
	});
}

module.exports = { addStudent, getStudents }
