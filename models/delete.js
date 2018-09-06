const connection = require('../../task/sql/api');

module.exports.deleteemployee= function (req, res) {
    let reviewno = req.body.reviewno;
    console.log(reviewno);
    connection.query('delete from review where reviewno=? ', [req.body.reviewno], function (error, results, fileds) {
        if (error) {
            console.log('error occured', error);

            res.send({
                "status": false,
                "message": "there is some quary error"
            })
        }

        else {
            res.send({
                "status": true,
                "data": results,
                success: 200,

                message: "delete sucessfully"


            });

        }



    });
}
