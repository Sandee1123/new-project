
const connection = require('../../task/sql/api');
module.exports.updateEmployees = function (req, res) {

    let empno = req.body.empno;
    let name=req.body.name;
    let salary= req.body.salary;
    

    connection.query("UPDATE employee SET name=?,salary=? WHERE empno = ? ", [empno,name,salary], function (error, rows, fields) {

        if (error) {
            console.log('error occured', error);

            res.send(error)
        }

        else {
            console.log('edit sucessfully');


            res.send(rows)
        }
    });

}