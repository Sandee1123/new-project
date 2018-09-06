const connection = require('../../task/sql/api');

module.exports.saveReview = function (req, res) {

    var reviews = {
       
        "reviewno":req.body.reviewno,
        "review": req.body.review,
        "empno":req.body.empno,
        
    } 
    console.log(reviews);
    connection.query('INSERT INTO review SET?', reviews, function (error, results, fields) {
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