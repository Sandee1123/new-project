const connection = require('../../task/sql/api');
module.exports.getemployee = function (req, res) {
    // var sql = "";
    connection.query("select * from employee", function (err, rows) {

        if (!err) {
            res.json(rows);
        }
    });

}

module.exports.getreview = function (req, res) {
    // var sql = "";
    connection.query("select * from review", function (err, rows) {

        if (!err) {
            res.json(rows);
        }
    });
}
    module.exports.getjoin = function (req, res) {
        // var sql = "";
        connection.query(" select employee.empno,employee.name,employee.salary,review.reviewno,review.review from employee INNER JOIN review on employee.empno=review.empno", function (err, rows) {
    
            if (!err) {
                res.json(rows);
            }
        });
    }

        module.exports.Editbyempno = function (req, res) {

            let empno = req.params.empno;
        
            connection.query('select * from employee where empno = ?', [empno], function (error, rows, results, fileds) {
        
                console.log(error);
                if (error) {
                    res.send(error);
        
                } else {
                    res.send(rows);
        
                }
            });
        }
    
