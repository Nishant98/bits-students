const http = require('http');
const express =require('express');
const app = express();
const bodyParser = require('body-parser');
// const mysql = require("mysql");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// var publicDir = require('path').join(__dirname,'/public');
// app.use(express.static(publicDir));


//functions
const con = require('./configuration/databaseConnection.js');
const student = require('./functions/studentQuery.js');

//AJAX
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var sql = "create table if not exists students (studentId varchar(50), studentName varchar(50))"
con.query(sql,function(err,result){
	if(err) throw err;
});

app.get('/',(req,res)=>{
	student.getStudents(function(err,result){
		res.json(result);
	})
});

app.post('/addStudent',(req,res)=>{
	var studentName = req.body.studentName;
	var studentId = req.body.studentId;
	student.addStudent(studentId, studentName, function(err,result){
		if(err) throw err;
		console.log(result)
		res.send("success");
	})
});

app.listen(8080);