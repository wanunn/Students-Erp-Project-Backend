const db = require('../db/db');

 const view = (req, res) => {
    db.query('SELECT * FROM students_detail Where id = ?',[req.params.id], (err, result)=>{
        if(err) {
            res.send("something went wrong");
        } else {
            res.status(200).json(result);
        }
    })
}
module.exports = view;