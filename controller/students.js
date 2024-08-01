const db = require('../db/db');

 const students = (req, res) => {
    db.query('SELECT * FROM students_detail ORDER BY id DESC', (err, result)=>{
        if(err) {
            res.send("something went wrong");
        } else {
            res.status(200).json(result);
        }
    })
}
module.exports = students;