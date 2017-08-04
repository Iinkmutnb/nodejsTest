var mysql = require('mysql');
/*var http = require('http');*/
var app = require('express')();
var http      =     require('http').Server(app);
var io        =     require("socket.io")(http);

var createserver = require('./createserver.js');
var pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "student",
    debug:false
});





/*  This is auto initiated event when Client connects to Your Machien.  */

io.on('connection',function(socket){  
    console.log("A user is connected");
    socket.on('status added',function(status){
      add_status(status,function(res){
        if(res){
            io.emit('refresh feed',status);
            console.log("1")
        } else {
            io.emit('error');
            console.log("2")
        }
      });
    });
});

var add_status = function (status,callback) {
    pool.getConnection(function(err,connection){
        if (err) {
          callback(false);
          return;
        }
    connection.query("SELECT *  FROM name_student",function(err, result, fields){
         console.log("sd")
            connection.release();
            if(!err) {
                callback(true);
              app.get("/",function(req,res){
                res.send(results);
              });
            console.log(result)
            }
        });
     
    });
}

http.listen(3007,function(){
    console.log("Listening on 3000");
});
/*var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "student"
});
con.connect(function(err) {
                                if (err) throw err;
                                con.query("SELECT *  FROM name_student", function (err, result, fields) {
                                       /if (err) callback(err,null);
                                        else {
                                            callback(null,result);

                                             }
                                                                    // createserver.create(app,result)
                                                                        
                                });
});
*/
/*function getUser(callback){ 
                    con.connect(function(err) {
                                if (err) throw err;
                                con.query("SELECT *  FROM name_student", function (err, result, fields) {
                                        if (err) callback(err,null);
                                        else {
                                            callback(null,result);

                                             }
                                                                    // createserver.create(app,result)
                                                                               
                                });
                    });
}
var user=getUser(function(err,data){
    
        if (err) {
            // error handling code goes here
            console.log("not get data")         
        } else {   
            console.log(data)         
            // code to execute on data retrieval
            return data;
           
        }    
        console.log(data)
        return data

    });*/
  // console.log(data)
