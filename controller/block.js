const db = require('../db/db');

 const block = (req, res) => {
    let action = 0;
    if(req.params.action == "block") {
         action = 0;
    } 
    else if(req.params.action == "unblock") {
         action = 1;
    }
    else if(req.params.action != "block" || req.params.action != "unblock") {
        return res.status(400).json({message: "Invalid Action"});
    }
   
    db.query('UPDATE students_detail SET active = ? WHERE id = ?', [action, req.params.id], (err, result)=>{
        if(err) {
            res.send(err);
        } else {
            res.status(200).json({message: `Student ${req.params.action} successfully`});
        }
    })
}
module.exports = block;