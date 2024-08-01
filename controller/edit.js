const db = require('../db/db');

 const edit = (req, res, next) => {
   const {fullName,dob,address,gender} = req.body;
   if(!fullName || !dob || !address || (gender != 0 && gender != 1)) {
       return res.status(422).json({error: "Please fill all the fields"});
   }
  try {
    db.query('UPDATE students_detail SET fullName=?,dob=?,address=?,gender=? WHERE id = ?', [fullName,dob,address,gender, req.params.id], (err, result) => {
        if(err) {
            res.send(err);
        } else {
            res.status(201).json({message: "Student updated successfully"});
        }
    })
  } catch (error) { 
    console.log(error);
  }
    
}
module.exports = edit;