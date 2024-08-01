const db = require('../db/db');

 const del = (req, res) => {
    db.query('DELETE FROM students_detail WHERE id = ?', [req.params.id], (err, result)=>{
        if(err) {
            res.send("something went wrong");
        } else {
            res.status(200).json({message: "Student deleted successfully"});
        }
    })
}
module.exports = del;