const connection = require('../../task/sql/api');

module.exports.saveEmployee = function (req, res) {

    var employees = {
       
        "empno":req.body.empno,
       "name": req.body.name,
        "salary": req.body.salary,
       
    }
    console.log(employees);
    connection.query('INSERT INTO employee SET?',employees, function (error, results, fields) {
        console.log(error);
       
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query'
            })


        } else {
            res.json({
                status: true,
                data: results,
                message: ' registered sucessfully',

            })

        }

    });

    
}