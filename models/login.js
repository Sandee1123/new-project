const connection = require('../../task/sql/api');


module.exports.loginuser = function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  console.log(username,password);

connection.query('SELECT * FROM users WHERE username = ? && password = ?',[username,password], function (error, results, fields) {
  if (error) {
    
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    // console.log('The solution is: ', results);
    if(results.length >0){
      if(results[0].password == password){
        res.send({
          "code":200,
          success:500
            });
      }
      else{
        res.send({
          "code":204,
          "success":"Email and password does not match"
            });
      }
    }
    else{
      res.send({
        "code":204,
        "success":"Email does not exits"
          });
    }
  }
  });
}